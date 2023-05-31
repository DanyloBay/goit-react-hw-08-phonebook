import PropTypes from 'prop-types';
import { ContainerWrapper, Title } from './Container.styled';

function Container({ children, title }) {
  return (
    <ContainerWrapper>
      <>
        {title && <Title>{title}</Title>}
        {children}
      </>
    </ContainerWrapper>
  );
}

Container.propTypes = {
  title: PropTypes.string,
};

export default Container;
