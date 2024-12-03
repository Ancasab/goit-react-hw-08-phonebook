import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// Styled Link for general links
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
  
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);  // Consolidated transition

  :hover,
  :focus {
    font-weight: 800;
    color: white;
    background-color: black;
  }

  @media (max-width: 768px) {
    font-size: 30px;  // Reduce font size for tablets
    padding: 15px 20px;  // Adjust padding for tablets
    margin-right: 30px;  // Reduce right margin on tablets
  }

  @media (max-width: 480px) {
    font-size: 24px;  // Further reduce font size for mobile screens
    padding: 10px 15px;  // Reduce padding for mobile
    margin-right: 20px;  // Reduce margin for small screens
  }
`;

// Main navigation container
export const MainNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    margin-top: 15px;  // Adjust margin for tablets
  }

  @media (max-width: 480px) {
    flex-direction: column;  // Stack nav items vertically on mobile
    margin-top: 10px;  // Adjust margin for small screens
  }
`;

// Main navigation list
export const MainNavList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;  // Stack items vertically on tablets
    gap: 10px;  // Add space between items on smaller screens
  }
`;

// Main navigation item
export const MainNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

// Styled Link for Main Navigation Links
export const MainNavLink = styled(NavLink)`
  font-family: 'Rubik Wet Paint', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  padding: 14px 28px;
  color: #000000;
  background-color: whitesmoke;
  border-radius: 20px 0 20px 0px;
  
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);  // Consolidated transition

  :hover,
  :focus {
    font-weight: 800;
    color: white;
    background-color: black;
  }

  @media (max-width: 768px) {
    font-size: 30px;  // Reduce font size for tablets
    padding: 15px 20px;  // Adjust padding for tablets
  }

  @media (max-width: 480px) {
    font-size: 24px;  // Further reduce font size for mobile screens
    padding: 10px 15px;  // Reduce padding for mobile
  }
`;

// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const Link = styled(NavLink)`
//   font-family: 'Rubik Wet Paint', cursive;
//   font-style: normal;
//   font-weight: 800;
//   font-size: 40px;
//   padding: 22px 28px;
//   margin-right: 50px;
//   color: #000000;
//   background-color: whitesmoke;
//   border-radius: 20px 0 20px 0px;
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   :hover,
//   :focus {
//     font-weight: 800;
//     color: white;
//     background-color: black;
//   }
// `;

// export const MainNav = styled.nav``;
// export const MainNavList = styled.ul``;
// export const MainNavItem = styled.li``;

// export const MainNavLink = styled(NavLink)`
// font-family: 'Rubik Wet Paint', cursive; 
// font-style: normal;
// font-weight: 800;
// font-size: 40px;
// padding: 17px 28px;
// color: #000000;
// background-color: whitesmoke;
// border-radius: 20px 0 20px 0px;
// transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
// :hover,
// :focus {
// font-weight: 800;
// color: white;
// background-color: black;
// }
// `;
