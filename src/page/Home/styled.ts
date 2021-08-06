import styled, { css } from 'styled-components';

interface TypePokemonProps {
  type: string;
}

interface ModalContainerProps {
  open?: boolean;
  loading?: boolean;
}

interface ContainerProps {
  pokemonTypes: any;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    css`
      background: green;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'poison' &&
    css`
      background: purple;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'normal' &&
    css`
      background: grey;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    css`
      background: orange;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    css`
      background: blue;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'flying' &&
    css`
      background: blueviolet;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fighting' &&
    css`
      background: burlywood;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fairy' &&
    css`
      background: pink;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'electric' &&
    css`
      background: yellow;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    css`
      background: yellowgreen;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'rock' &&
    css`
      background: brown;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'psychic' &&
    css`
      background: purple;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ice' &&
    css`
      background: silver;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'bug' &&
    css`
      background: greenyellow;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ghost' &&
    css`
      background: #fff;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'steel' &&
    css`
      background: #6a261a;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    css`
      background: #517e38;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dark' &&
    css`
      background: #000494;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'unknow' &&
    css`
      background: #000494;
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(
        165deg,
        rgba(212, 34, 202, 1) 0%,
        rgba(9, 121, 22, 1) 76%
      );
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    pokemonTypes[1] === 'poison' &&
    css`
      background: linear-gradient(165deg, purple 0%, rgba(9, 121, 22, 1) 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'bug' &&
    pokemonTypes[1] === 'poison' &&
    css`
      background: linear-gradient(165deg, purple 0%, greenyellow 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ghost' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, #fff 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ghost' &&
    pokemonTypes[1] === 'dark' &&
    css`
      background: linear-gradient(165deg, #000494 0%, #fff 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ghost' &&
    pokemonTypes[1] === 'grass' &&
    css`
      background: linear-gradient(165deg, rgba(9, 121, 22, 1) 0%, #fff 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'bug' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, greenyellow 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'steel' &&
    pokemonTypes[1] === 'rock' &&
    css`
      background: linear-gradient(165deg, brown 0%, #6a261a 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dark' &&
    pokemonTypes[1] === 'ice' &&
    css`
      background: linear-gradient(165deg, silver 0%, #000494 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'rock' &&
    css`
      background: linear-gradient(165deg, brown 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, yellowgreen 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    pokemonTypes[1] === 'dark' &&
    css`
      background: linear-gradient(165deg, #000494 0%, green 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'bug' &&
    pokemonTypes[1] === 'grass' &&
    css`
      background: linear-gradient(165deg, green 0%, greenyellow 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'rock' &&
    pokemonTypes[1] === 'fairy' &&
    css`
      background: linear-gradient(165deg, pink 0%, brown 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    pokemonTypes[1] === 'steel' &&
    css`
      background: linear-gradient(165deg, #6a261a 0%, yellowgreen 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'rock' &&
    pokemonTypes[1] === 'dragon' &&
    css`
      background: linear-gradient(165deg, #517e38 0%, brown 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'electric' &&
    css`
      background: linear-gradient(165deg, yellow 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'poison' &&
    pokemonTypes[1] === 'dragon' &&
    css`
      background: linear-gradient(165deg, #517e38 0%, purple 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    pokemonTypes[1] === 'ghost' &&
    css`
      background: linear-gradient(165deg, #fff 0%, orange 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    pokemonTypes[1] === 'ice' &&
    css`
      background: linear-gradient(165deg, silver 0%, green 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    pokemonTypes[1] === 'fire' &&
    css`
      background: linear-gradient(165deg, orange 0%, #517e38 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, #517e38 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    pokemonTypes[1] === 'ice' &&
    css`
      background: linear-gradient(165deg, silver 0%, #517e38 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'steel' &&
    pokemonTypes[1] === 'psychic' &&
    css`
      background: linear-gradient(165deg, purple 0%, #6a261a 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    pokemonTypes[1] === 'normal' &&
    css`
      background: linear-gradient(165deg, gray 0%, orange 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ghost' &&
    pokemonTypes[1] === 'poison' &&
    css`
      background: linear-gradient(165deg, purple 0%, #fff 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    pokemonTypes[1] === 'bug' &&
    css`
      background: linear-gradient(165deg, greenyellow 0%, orange 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'steel' &&
    pokemonTypes[1] === 'ghost' &&
    css`
      background: linear-gradient(165deg, #fff 0%, #6a261a 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'grass' &&
    pokemonTypes[1] === 'fairy' &&
    css`
      background: linear-gradient(165deg, pink 0%, green 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'normal' &&
    pokemonTypes[1] === 'psychic' &&
    css`
      background: linear-gradient(165deg, purple 0%, gray 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dark' &&
    pokemonTypes[1] === 'dragon' &&
    css`
      background: linear-gradient(165deg, #517e38 0%, #000494 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'bug' &&
    css`
      background: linear-gradient(165deg, greenyellow 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    pokemonTypes[1] === 'ghost' &&
    css`
      background: linear-gradient(165deg, #fff 0%, yellowgreen 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'normal' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, gray 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'rock' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, brown 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'steel' &&
    css`
      background: linear-gradient(165deg, #6a261a 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'dragon' &&
    css`
      background: linear-gradient(165deg, #517e38 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'bug' &&
    pokemonTypes[1] === 'rock' &&
    css`
      background: linear-gradient(165deg, brown 0%, greenyellow 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'poison' &&
    css`
      background: linear-gradient(165deg, purple 0%, blue 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dark' &&
    pokemonTypes[1] === 'psychic' &&
    css`
      background: linear-gradient(165deg, purple 0%, #000494 76%);
    `}

  ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    pokemonTypes[1] === 'rock' &&
    css`
      background: linear-gradient(165deg, brown 0%, yellowgreen 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    pokemonTypes[1] === 'fighting' &&
    css`
      background: linear-gradient(165deg, burlywood 0%, #517e38 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'electric' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, yellow 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ice' &&
    pokemonTypes[1] === 'psychic' &&
    css`
      background: linear-gradient(165deg, purple 0%, silver 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'normal' &&
    pokemonTypes[1] === 'grass' &&
    css`
      background: linear-gradient(165deg, green 0%, gray 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'dark' &&
    css`
      background: linear-gradient(165deg, #000494 0%, blue 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'fairy' &&
    css`
      background: linear-gradient(165deg, pink 0%, blue 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'ground' &&
    pokemonTypes[1] === 'electric' &&
    css`
      background: linear-gradient(165deg, yellow 0%, yellowgreen 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    pokemonTypes[1] === 'flying' &&
    css`
      background: linear-gradient(165deg, blueviolet 0%, orange 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'fire' &&
    pokemonTypes[1] === 'ground' &&
    css`
      background: linear-gradient(165deg, yellowgreen 0%, orange 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'water' &&
    pokemonTypes[1] === 'psychic' &&
    css`
      background: linear-gradient(165deg, purple 0%, blue 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'rock' &&
    pokemonTypes[1] === 'dark' &&
    css`
      background: linear-gradient(165deg, #000494 0%, brown 76%);
    `}

    ${({ pokemonTypes }) =>
    pokemonTypes[0] === 'dragon' &&
    pokemonTypes[1] === 'electric' &&
    css`
      background: linear-gradient(165deg, yellow 0%, #517e38 76%);
    `}
`;

const Content = styled.div<ModalContainerProps>`
  width: 600px;
  height: 600px;
  background: #fff;
  border-radius: 50%;
  border: 20px solid #000;
  box-shadow: inset -10px 10px 0 10px #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  padding: 4rem;

  h1 {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: #ee1515;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
  }

  &::after {
    top: calc(50% - 20px);
    left: 0;
    width: 100%;
    height: 40px;
    background: #000;
  }

  div {
    position: absolute;
    top: calc(50% - 80px);
    left: calc(50% - 80px);
    width: 160px;
    height: 160px;
    background: #7f8c8d;
    border: 30px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 20px black;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: #bdbdbd;
    }
  }
  ${({ open }) =>
    open
      ? css`
          transform: translate(-100%, -40%);
        `
      : css`
          transform: translate(-50%, -50%);
        `};

  transition: transform 0.3s ease-in-out;
`;

const Logo = styled.img`
  padding: 2rem;
`;

const ModalDetailsContainer = styled.div<ModalContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 550px;
  height: 550px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px black;
  opacity: 1;

  ${({ open }) =>
    open
      ? css`
          transform: translate(-50%, -40%);
          box-shadow: -13px 3px 6px #00000029;
        `
      : css`
          transform: translate(0);
        `};

  transition: transform 0.3s ease-in-out;

  ${({ loading }) =>
    loading &&
    css`
      opacity: 0.85;
    `};
`;

const ModalDetailsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 100%;

  img {
    width: 40rem;
    height: 40rem;
    margin-top: 4rem;
  }

  h2 {
    font-size: 3rem;
    text-transform: capitalize;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
  }

  button {
    position: absolute;
    top: 2rem;
    right: 4rem;
    border: none;
    background: none;
    font-size: 2rem;
  }
`;

const TypePokemon = styled.span<TypePokemonProps>`
  font-size: 1.75rem;
  padding: 1rem;
  margin-bottom: 4rem;
  border-radius: 5px;
  ${({ type }) =>
    type === 'grass' &&
    css`
      background: green;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'poison' &&
    css`
      background: purple;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'normal' &&
    css`
      background: grey;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'fire' &&
    css`
      background: orange;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'water' &&
    css`
      background: blue;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'flying' &&
    css`
      background: blueviolet;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'fighting' &&
    css`
      background: burlywood;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'fairy' &&
    css`
      background: pink;
      color: #222;
    `}

  ${({ type }) =>
    type === 'electric' &&
    css`
      background: yellow;
      color: #222;
    `}

  ${({ type }) =>
    type === 'ground' &&
    css`
      background: yellowgreen;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'rock' &&
    css`
      background: brown;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'psychic' &&
    css`
      background: purple;
      color: pink;
    `}

  ${({ type }) =>
    type === 'ice' &&
    css`
      background: silver;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'bug' &&
    css`
      background: greenyellow;
      color: #222;
    `}

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: #fff;
      color: #222;
      border: 1px solid #000;
    `}

  ${({ type }) =>
    type === 'steel' &&
    css`
      background: #6a261a;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'dragon' &&
    css`
      background: #517e38;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'dark' &&
    css`
      background: #000494;
      color: #fff;
    `}

  ${({ type }) =>
    type === 'unknow' &&
    css`
      background: #000494;
      color: #222;
      border: 1px solid #bdbdbd;
    `}
`;

export {
  Container,
  Content,
  ModalDetailsContainer,
  Logo,
  ModalDetailsContent,
  TypePokemon,
};
