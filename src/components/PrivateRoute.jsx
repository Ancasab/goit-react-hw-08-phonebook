import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  // Dacă utilizatorul nu este logat și procesul de refresh nu este în desfășurare, redirecționează
  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  }

  return children; // Afișează componenta doar dacă utilizatorul este logat
};

export default PrivateRoute;


