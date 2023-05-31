import propTypes from 'prop-types';
import { Wrapper, Text } from './Message.styled';

function Message({ message }) {
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
}

Message.propTypes = {
  message: propTypes.string,
};

export default Message;
