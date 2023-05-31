import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';

function useLoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ email, password }) => {
    dispatch(operations.loginUser({ email, password }));

    navigate('/');
  };

  return { onSubmitForm };
}

export default useLoginUser;

//   const onSubmitForm = { email, password }
//     .then(() => {
//       Notify.success('Good');
//       dispatch(operations.loginUser({ email, password })).unwrap();
//     })
//     .then(() => navigate('/contacts'), { replace: true })
//     .catch(() => Notify.warning('Error'));

//   return onSubmitForm();
// }
// export default useLoginUser;
