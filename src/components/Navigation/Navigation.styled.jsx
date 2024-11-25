import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-family: 'Rubik Wet Paint', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  padding: 22px 28px;
  margin-right: 50px;
  color: #000000;
  background-color: whitesmoke;
  border-radius: 20px 0 20px 0px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    font-weight: 800;
    color: white;
    background-color: black;
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;

export const MainNavLink = styled(NavLink)`
font-family: 'Rubik Wet Paint', cursive; 
font-style: normal;
font-weight: 800;
font-size: 40px;
padding: 17px 28px;
color: #000000;
background-color: whitesmoke;
border-radius: 20px 0 20px 0px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus {
font-weight: 800;
color: white;
background-color: black;
}
`;
