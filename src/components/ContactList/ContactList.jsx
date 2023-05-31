/* eslint-disable no-unused-vars */
import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import { List, Item } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import useFiltredContacts from 'hooks/useFiltredContacts';

function ContactList() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filteredContactList } = useFiltredContacts();

  return (
    <>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      <List>
        {contacts &&
          filteredContactList.map(({ id, name, number }) => {
            console.log(filteredContactList);
            return (
              <Item key={id}>
                <Contact id={id} name={name} number={number} />
              </Item>
            );
          })}
      </List>
    </>
  );
}

export default ContactList;
