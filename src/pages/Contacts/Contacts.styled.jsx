import styled from '@emotion/styled';
import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)`
  width: 20px;
  height: 20px;
  
  fill: black;
`;
export const PageContainer = styled.div`
  padding: 40px 40px;
  height: 100vh;

 
  // background: radial-gradient(circle, #FFD700, #FF6B6B, #3E8AC5);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;
export const Title = styled.h2`
font-family: 'Rubik Wet Paint', cursive; 
  font-weight: 700;
  font-size: 50px;
  
  margin-left: 20px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
width: 250px;
padding: 25px 30px;
color: #000000;
background: #efefef;
border-radius: 18px;
border: 1px solid #efefef;
:placeholder {
  color: #757575;
}
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus {
  border: 1px solid #000000;
}
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;
  padding: 10px;
  margin-left: 15px;
  margin-right: 20px;
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