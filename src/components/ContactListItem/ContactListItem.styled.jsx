import styled from '@emotion/styled';
import { FaUser, FaPhoneAlt, FaUserMinus } from 'react-icons/fa';

export const UserIcon = styled(FaUser)`
  padding: 8px;
  width: 20px;
  height: 20px;
  fill: black;
  border-radius: 50%;
  background-color: whitesmoke;
  &:hover,
  &:focus {
    background-color: black;
    fill: red;
    
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  padding: 8px;
  width: 20px;
  height: 20px;
  fill: black;
  border-radius: 50%;
  background-color: whitesmoke;
  &:hover,
  &:focus {
    background-color: black;
    fill: red;
    
  }
`;

export const UserDeletedIcon = styled(FaUserMinus)`
  width: 50px;
  height: 20px;
  fill: black;
`;

export const ContactItem = styled.li`
  max-width: 400px;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px 20px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
 `;

export const Button = styled.button`
font-weight: 600;
font-size: 20px;
display: flex;
align-items: center;
gap: 5px;
width: fit-content;
padding: 10px;
background-color: whitesmoke;
border: 1px solid black;
border-radius: 10px;
cursor: pointer;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus {
  color: white;
  background-color: black;
  border: 1px solid #000000;
  > svg {
    fill: white;
  }
}
`;

// import styled from '@emotion/styled';
// import { FaUser, FaPhoneAlt, FaUserMinus } from 'react-icons/fa';

// // User Icon - Standard icon for user
// export const UserIcon = styled(FaUser)`
//   padding: 8px;
//   width: 20px;
//   height: 20px;
//   fill: black;
//   border-radius: 50%;
//   background-color: whitesmoke;
  
//   &:hover,
//   &:focus {
//     background-color: black;
//     fill: red;
//   }
// `;

// // Phone Icon - Standard icon for phone
// export const PhoneIcon = styled(FaPhoneAlt)`
//   padding: 8px;
//   width: 20px;
//   height: 20px;
//   fill: black;
//   border-radius: 50%;
//   background-color: whitesmoke;
  
//   &:hover,
//   &:focus {
//     background-color: black;
//     fill: red;
//   }
// `;

// // User Deleted Icon - Specific icon for deleted users
// export const UserDeletedIcon = styled(FaUserMinus)`
//   width: 50px;
//   height: 20px;
//   fill: black;
// `;

// // Contact Item - Main wrapper for each contact
// export const ContactItem = styled.li`
//   max-width: 1168px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 15px;
//   padding: 20px;
//   border-radius: 24px;
//   border: 1px solid rgba(0, 0, 0, 0.04);
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
//   background-color: whitesmoke;

//   @media (max-width: 768px) {
//     width: 100%;  // Make it full width on smaller screens
//     padding: 15px;  // Reduce padding on small screens
//   }

//   @media (max-width: 480px) {
//     padding: 10px;  // Even less padding on very small screens
//   }
// `;

// // Contact Name - Name display for the contact
// export const ContactName = styled.p`
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   margin: 0;
//   font-weight: 500;
//   font-size: 18px;

//   @media (max-width: 768px) {
//     font-size: 16px; // Adjust font size for tablets
//   }

//   @media (max-width: 480px) {
//     font-size: 14px;  // Even smaller for mobile screens
//   }
// `;

// // Contact Number - Phone number display for the contact
// export const ContactNumber = styled.p`
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   margin: 0;
//   font-size: 18px;

//   @media (max-width: 768px) {
//     font-size: 16px;  // Adjust font size for tablets
//   }

//   @media (max-width: 480px) {
//     font-size: 14px;  // Even smaller for mobile screens
//   }
// `;

// // Button - Styled button used for actions like deleting contacts
// export const Button = styled.button`
//   font-weight: 600;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   width: fit-content;
//   padding: 10px;
//   background-color: whitesmoke;
//   border: 1px solid black;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);  // Consolidated transition

//   &:hover,
//   &:focus {
//     color: white;
//     background-color: black;
//     border: 1px solid #000;
//     > svg {
//       fill: white;  // Change icon color to white on hover
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 8px 15px;  // Adjust padding for tablet
//     font-size: 18px;  // Adjust font size for tablets
//   }

//   @media (max-width: 480px) {
//     padding: 6px 12px;  // Adjust padding for mobile
//     font-size: 16px;  // Adjust font size for mobile screens
//   }
// `;
