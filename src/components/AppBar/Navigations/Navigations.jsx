import { List, Item, Link } from './Navigations.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function Navigations() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      {isLoggedIn && (
        <Item>
          <Link to="/contacts">Contacts</Link>
        </Item>
      )}
    </List>
  );
}

export default Navigations;
