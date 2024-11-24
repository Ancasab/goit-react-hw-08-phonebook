import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  font-size: 20px;
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
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 15px 40px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: red;
    background-color: black;
    border: 1px solid #000000;
  }
`;

export const LoggedLink = styled(NavLink)`
  margin-top: 8px;
  color: #8f8f8f;
  cursor: pointer;
  :hover,
  :focus {
    color: red;
  }
`;