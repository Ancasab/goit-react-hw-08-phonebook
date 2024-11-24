import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
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