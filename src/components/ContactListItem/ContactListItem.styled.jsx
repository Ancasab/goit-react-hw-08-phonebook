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
width: 400px;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px 20px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
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
