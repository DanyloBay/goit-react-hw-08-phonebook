import { useParams, useNavigate } from 'react-router-dom';
import {
  useChangeContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function useChangeContactForm() {
  let currentContact = null;
  let initialValues = null;

  const { contactId } = useParams();
  const navigate = useNavigate();

  const [changeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data: contacts } = useGetContactsQuery();

  if (contacts) {
    currentContact = contacts.find(({ id }) => id === contactId);

    initialValues = {
      name: currentContact.name,
      number: currentContact.number,
    };
  }

  const onSubmitForm = values => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try to change something first.');
      return;
    }
    changeContact({ contactId, ...values });
    navigate('/contacts');
    Notify.success('The contact has been successfully changed.');
  };

  return { isUpdating, onSubmitForm, initialValues };
}

export default useChangeContactForm;
