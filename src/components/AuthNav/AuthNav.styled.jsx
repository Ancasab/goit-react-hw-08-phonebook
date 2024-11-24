import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;
export const NavItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 20px;
  padding: 15px 30px;
  color: black;
  background-color: whitesmoke;
  border-radius: 10px;
  transition: background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
  color 300ms cubic-bezier(0.25, 0.1, 0.25, 1); 
  :hover,
  :focus {
    color: red;
    background-color: black;
  }
`;