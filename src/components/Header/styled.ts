import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #ecf0f1;
  height: 100vh;

  img {
    padding: 2rem;
  }
`;

const Content = styled.div`
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
`;

const ModalDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 550px;
  height: 550px;
  background: #ecf0f1;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px black;
`;

export { Container, Content, ModalDetails };
