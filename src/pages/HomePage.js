import { Container, Title, LinkStyled, Block } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Block>
        <Title>Rent of campers in Ukraine</Title>
        <LinkStyled to="/catalog">to view the catagogue click here</LinkStyled>
      </Block>
    </Container>
  );
};

export default HomePage;
