import { useNavigate } from 'react-router-dom';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contact-api';
import { Report } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function useCreateNewContact(data) {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = data => {
    contacts.some(contact => contact.name === data.name)
      ? Report.warning(
          `${data.name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : contacts.some(contact => contact.name !== data.name)
      ? createContact(data) &&
        Notify.success(`The ${data.name} has been added to your contact list.`)
      : createContact(data);

    navigate('/contacts');
  };

  return onSubmitForm;
}
export default useCreateNewContact;
