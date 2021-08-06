import React, { useState } from 'react';
import { Container, Content, ModalDetails } from './styled';

import mainLogo from '../assets/logo_pokemon.svg';

const Header: React.FC = () => {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  return (
    <>
      <Container>
        <img src={mainLogo} alt="main logo" />

        <Content>
          <h1>Pokemon Random</h1>
          <div aria-hidden onClick={() => handleOpenModal()} />
        </Content>
        {modal && (
          <ModalDetails>
            <div>Modal Pokemon</div>
          </ModalDetails>
        )}
      </Container>
    </>
  );
};

export default Header;
