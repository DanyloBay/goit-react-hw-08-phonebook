import { Button, ButtonText } from './AddButton.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';

function AddButton({ text }) {
  return (
    <Button to="/contacts/add">
      <ButtonText>{text}</ButtonText>
      <BsFillPersonPlusFill size={20} />
    </Button>
  );
}

AddButton.propTypes = {
  text: propTypes.string,
};

export default AddButton;
