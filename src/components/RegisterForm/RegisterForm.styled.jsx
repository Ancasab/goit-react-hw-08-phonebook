import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;
  margin:0 auto;
  margin-top: 50px;
  // background: linear-gradient(45deg, #ADD8E6, #00008B);
  background: linear-gradient(45deg, #FF6B6B, #3E8AC5);
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
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
  // background-color: whitesmoke;
  // bckground-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // transition: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
  // transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: black;
    border: 1px solid #000000;
  }
`;

export const Text = styled.h2 `
  color: black;
  margin-top: 50px ;

`

export const LoggedLink = styled(NavLink)`
  margin: 10px 0;
  color: black;

  cursor: pointer;

  :hover,
  :focus {
    color: white;
  }
`;
