import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PrivateRoute({ redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  if (isLoggedIn) return <Navigate to={redirectTo} />;
}

export default PrivateRoute;
