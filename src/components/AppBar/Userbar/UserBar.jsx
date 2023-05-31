import {
  Wrapper,
  GroupWrapper,
  UserIcon,
  TextWrapper,
  Text,
  UserName,
  Email,
  Button,
} from './UserBar.styled';
import { useSelector } from 'react-redux';
import { getName, getEmail } from 'redux/auth/auth-selectors';
import useLogoutUser from 'hooks/useLogoutUser';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));
  const logout = useLogoutUser();

  return (
    <Wrapper>
      <GroupWrapper>
        <UserIcon />
        <TextWrapper>
          <Text>
            Welcome, <UserName>{userName}</UserName>
          </Text>
          <Email>{userEmail}</Email>
        </TextWrapper>
      </GroupWrapper>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;
