import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  Wrapper,
  NameWrapper,
  IconUser,
  Name,
  Number,
  ButtonList,
  ButtonItem,
  Button,
} from './Contact.styled';
import Modal from 'components/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact';
import { useNavigate } from 'react-router-dom';

function Contact({ id, name, number }) {
  const { showModal, toggleModal } = useShowModal(false);
  const navigate = useNavigate();

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={name}>
          <DeletingContact id={id} name={name} toggleModal={toggleModal} />
        </Modal>
      )}

      <Wrapper>
        <NameWrapper>
          <IconUser />
          <Name>{name}</Name>
        </NameWrapper>

        <Number>{number}</Number>

        <ButtonList>
          <ButtonItem>
            <Button type="button" onClick={toggleModal}>
              <FaTrash />
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={() => navigate(`edit/${id}`)}>
              <FaUserEdit />
            </Button>
          </ButtonItem>
        </ButtonList>
      </Wrapper>
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
