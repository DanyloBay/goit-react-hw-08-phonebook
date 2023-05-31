import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

function useRefreshCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    // setCurrentUser(dispatch(operations.getCurrentUser()));
    dispatch(operations.getCurrentUser())
      .unwrap()
      .then(user => setCurrentUser(user))
      .catch(e => {
        // fucking catch )))))
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { currentUser, isRefreshing };
}

export default useRefreshCurrentUser;
