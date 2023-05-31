import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import AddButton from 'components/AddButton';

function ContactsPage() {
  const { data: contacts } = useGetContactsQuery();
  return (
    <Container title="Contacts">
      <AddButton text="Add new contact" />
      <Filter />
      {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message message="Contact list is empty." />
      )}
    </Container>
  );
}

export default ContactsPage;
