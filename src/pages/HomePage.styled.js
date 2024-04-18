import styled from 'styled-components';
// import img from '../components/img/welcome.jpg';
import img from '../components/img/Autocamperplads.jpg';
// import img from '../components/img/1.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* @media screen and (min-width: 768px) {
    background-image: url(${img});
  } */
`;
