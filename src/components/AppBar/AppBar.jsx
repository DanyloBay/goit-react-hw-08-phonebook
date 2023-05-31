import { Wrapper } from './AppBar.styled';
import Container from 'components/Container';
import Logo from './Logo';
import Navigations from './Navigations';
import AuthNav from './AuthNav';
import UserBar from './Userbar';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
}

export default AppBar;
