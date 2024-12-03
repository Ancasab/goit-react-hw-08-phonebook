import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
  margin-left: auto;
  justify-content: flex-end;

  /* Responsive Design */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;  /* Added padding for better spacing when stacking */
  }
`;

export const NavItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  font-family: 'Rubik Wet Paint', cursive;
  display: block;
  font-weight: 600;
  font-size: 1.6rem;  /* Adjusted font size for scalability */
  padding: 15px 30px;
  color: #000000;
  background-color: whitesmoke;
  border-radius: 10px;
  text-decoration: none;  /* Ensure links don't have underlines */
  transition: 
    background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
    color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
    transform 200ms ease,
    box-shadow 200ms ease;  /* Added box-shadow transition for hover/focus */

  :hover,
  :focus {
    color: white;
    background-color: #86b0ff;
    transform: scale(1.05);  /* Subtle scale effect on hover/focus */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);  /* Added shadow effect on hover/focus */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1.4rem;  /* Slightly smaller font size on mobile */
    padding: 12px 25px;
  }

  /* Focus States for accessibility */
  :focus {
    outline: 2px solid #86b0ff;
    outline-offset: 4px;
  }
`;


// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const NavList = styled.ul`
//   display: flex;
//   gap: 8px;
//   margin-left: auto;
//   justify-content: flex-end;

//   /* Responsive Design */
//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 12px;
//   }
// `;

// export const NavItem = styled.li``;

// export const NavigationLink = styled(NavLink)`
//   font-family: 'Rubik Wet Paint', cursive;
//   display: block;
//   font-weight: 600;
//   font-size: 1.6rem;  /* Adjusted font size for scalability */
//   padding: 15px 30px;
//   color: #000000;
//   background-color: whitesmoke;
//   border-radius: 10px;
//   text-decoration: none;  /* Ensure links don't have underlines */
//   transition: background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
//               color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
//               transform 200ms ease;

//   :hover,
//   :focus {
//     color: white;
//     background-color: #86b0ff;
//     transform: scale(1.05);  /* Subtle scale effect on hover/focus */
//   }

//   /* Responsive Design */
//   @media (max-width: 768px) {
//     font-size: 1.4rem;  /* Slightly smaller font size on mobile */
//     padding: 12px 25px;
//   }

//   /* Focus States for accessibility */
//   :focus {
//     outline: 2px solid #86b0ff;
//     outline-offset: 4px;
//   }
// `;



// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const NavList = styled.ul`
//   display: flex;
//   gap: 8px;
//   margin-left: auto;
// `;
// export const NavItem = styled.li``;

// export const NavigationLink = styled(NavLink)`
// font-family: 'Rubik Wet Paint', cursive;  
// display: block;
//   font-weight: 600;
//   font-size: 30px;
//   padding: 15px 30px;
//   color: #000000;;
//   background-color: whitesmoke;
//   border-radius: 10px;
//   transition: background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
//   color 300ms cubic-bezier(0.25, 0.1, 0.25, 1); 
//   :hover,
//   :focus {
//     color: white;
//     background-color: #86b0ff;
//     // background-color: black;
    
//   }
// `;