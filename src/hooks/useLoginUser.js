import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';

function useLoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ email, password }) => {
    dispatch(operations.loginUser({ email, password }));

    navigate('/contacts');
  };

  return { onSubmitForm };
}

export default useLoginUser;
