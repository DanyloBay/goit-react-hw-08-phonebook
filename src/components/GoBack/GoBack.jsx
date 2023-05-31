import propTypes from 'prop-types';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Button, Label } from './GoBack.styled';
import { useNavigate } from 'react-router-dom';

function GoBack({ text, path }) {
  const navigate = useNavigate();
  const goToPage = () => navigate(path);

  return (
    <Button type="button" onClick={goToPage}>
      <FaLongArrowAltLeft />
      <Label>{text}</Label>
    </Button>
  );
}

GoBack.prototype = {
  label: propTypes.string,
  path: propTypes.string,
};

export default GoBack;
