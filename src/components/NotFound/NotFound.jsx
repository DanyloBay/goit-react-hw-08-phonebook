import { Wrapper, Title, Text, StyledLink } from './NotFound.styled';
import propTypes from 'prop-types';
import Container from 'components/Container';

function NotFound({ data, status }) {
  return (
    <Container>
      <Wrapper>
        <Title>
          Sorry {status} {data} :(
        </Title>
        <Text>Something went wrong.</Text>
        <StyledLink to="/">Go back to the main page</StyledLink>
      </Wrapper>
    </Container>
  );
}

NotFound.propTypes = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;
