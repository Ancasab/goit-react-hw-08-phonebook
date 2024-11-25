import { NavItem, NavigationLink, NavList } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavigationLink to="login">Log In</NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to="register">Register</NavigationLink>
      </NavItem>
    </NavList>
  );
};

export default AuthNav;