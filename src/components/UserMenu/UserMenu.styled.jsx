import styled from '@emotion/styled';

export const UserNavigation = styled.div`
  display: flex;
  margin-left: auto;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  margin-right: 32px;

  > div {
    display: grid;
    align-items: center;
    gap: 6px;
  }
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  text-align: right;

  color: white;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  text-align: right;

  color: white;
`;


export const LogOutBtn = styled.button`
font-family: 'Rubik Wet Paint', cursive;
font-weight: 600;
font-size: 30px;
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
  color: white;
  background-color: #86b0ff;
  border: 1px solid #000000;
}
`;