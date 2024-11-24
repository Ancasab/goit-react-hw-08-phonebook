import { useAuth } from 'hooks/useAuth';
import {
  Link,
  MainNav,
  MainNavItem,
  MainNavLink,
  MainNavList,
} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Link to="/">
      Home
      </Link>
      <MainNav>
        {isLoggedIn && (
          <MainNavList>
            <MainNavItem>
              <MainNavLink to="/contacts">Contacts</MainNavLink>
            </MainNavItem>
          </MainNavList>
        )}
      </MainNav>
    </>
  );
};

export default Navigation;