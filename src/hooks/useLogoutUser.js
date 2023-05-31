import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';

function useLogoutUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(operations.logoutUser());
    navigate('/');
  };

  return logout;
}

export default useLogoutUser;
