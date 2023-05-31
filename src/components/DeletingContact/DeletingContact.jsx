import PropTypes from 'prop-types';
import {
  Text,
  Name,
  List,
  Item,
  ButtonCancel,
  ButtonDelete,
} from './DeletingContact.styled';
import useDeletingContact from 'hooks/useDeletingContact';

function DeletingContact({ id, name, toggleModal }) {
  const { isDeleting, deleteSelectedContact } = useDeletingContact(
    id,
    name,
    toggleModal
  );

  return (
    <>
      <Text>
        Are you sure you want to delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={toggleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonDelete type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonDelete>
        </Item>
      </List>
    </>
  );
}

DeletingContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default DeletingContact;
