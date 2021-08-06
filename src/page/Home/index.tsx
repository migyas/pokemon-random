import React, { useState, useEffect } from 'react';
import {
  Container,
  Content,
  Logo,
  ModalDetailsContainer,
  ModalDetailsContent,
  TypePokemon,
} from './styled';

import mainLogo from '../../assets/logo_pokemon.svg';
import pokemonImgDefault from '../../assets/default.png';
import api from '../../service/api';

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<any>({});
  const [pokemonTypes, setPokemonTypes] = useState<any>({});
  const [pokemonImg, setPokemonImg] = useState('');

  const showPokemon = async (pokemonID = 25) => {
    setLoading(true);

    try {
      const response = await api.get(`pokemon/${pokemonID}`);
      const types = response.data.types.map((item: any) => item.type.name);
      setPokemonImg(response.data.sprites.other.dream_world.front_default);
      setPokemonTypes(types);
      setPokemon(response.data);
      setLoading(false);
      console.log(response.data);
      console.log(types);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleOpenModal = () => {
    const min = Math.ceil(1);
    const max = Math.floor(900);
    try {
      showPokemon(Math.floor(Math.random() * (max - min)) + min);
      setLoading(true);
      setModal(true);
    } catch (e) {
      throw new Error(e);
    }
  };

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <Container pokemonTypes={pokemonTypes}>
        <Logo src={mainLogo} alt="main logo" />

        <Content open={modal} loading={loading}>
          <h1>Pokemon Random</h1>
          <div aria-hidden onClick={() => handleOpenModal()} />
        </Content>
        {modal && (
          <ModalDetailsContainer open={modal} loading={loading}>
            {loading ? (
              <ModalDetailsContent>
                <h2>Carregando...</h2>
              </ModalDetailsContent>
            ) : (
              <>
                <ModalDetailsContent>
                  <button type="button" onClick={() => handleCloseModal()}>
                    X
                  </button>
                  <img
                    src={pokemonImg === null ? pokemonImgDefault : pokemonImg}
                    alt="pokemon"
                  />
                  <h2>{pokemon?.name}</h2>
                  <div>
                    {pokemon.types?.map((item: any) => (
                      <>
                        <TypePokemon key={item.type.name} type={item.type.name}>
                          {item.type.name}
                        </TypePokemon>
                      </>
                    ))}
                  </div>
                </ModalDetailsContent>
              </>
            )}
          </ModalDetailsContainer>
        )}
      </Container>
    </>
  );
};

export default Home;
