import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../components/img/welcome.jpg';
// import img from '../components/img/Autocamperplads.jpg';
// import img from '../components/img/1.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: var(--color-button);
`;

export const LinkStyled = styled(Link)`
  color: var(--color-button);
`;
/* @media screen and (min-width: 768px) {
    background-image: url(${img});
  } */
