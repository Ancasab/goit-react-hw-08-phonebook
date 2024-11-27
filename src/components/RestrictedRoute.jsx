// import { useAuth } from '../hooks/useAuth';
// import { Navigate } from 'react-router-dom';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// export default RestrictedRoute;

import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : children; // 
};

export default RestrictedRoute;