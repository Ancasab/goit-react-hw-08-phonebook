import styled from '@emotion/styled';
import { FaUserPlus } from 'react-icons/fa';

// Icon styling
export const Icon = styled(FaUserPlus)`
  width: 20px;
  height: 20px;
  fill: black;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

// Form styling
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

// Label styling
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

// Input styling
export const Input = styled.input`
  width: 250px;
  padding: 15px 30px; /* Adjusted padding for better alignment */
  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;
  font-size: 16px; /* Add consistent font size */
  
  &::placeholder {  /* Corrected placeholder syntax */
    color: #757575;
  }

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 1px solid #000000;
  }
`;

// Button styling
export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 14px;  /* Ensuring space between icon and text */
  width: fit-content;
  padding: 10px 20px;  /* Adjusted padding for better visual balance */
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 20px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  /* Combined all transitions into one */
  transition: 
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: black;
    border: 1px solid #000000;

    /* Change icon color when the button is hovered or focused */
    > svg {
      fill: white;
    }
  }
`;


// import styled from '@emotion/styled';
// import { FaUserPlus } from 'react-icons/fa';

// export const Icon = styled(FaUserPlus)`
//   width: 20px;
//   height: 20px;
//   fill: black;
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px;
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin-top: 12px;
//   font-size: 16px;
//   font-weight: 500;
// `;

// export const Input = styled.input`
// width: 250px;
// padding: 25px 30px;
// color: #000000;
// background: #efefef;
// border-radius: 18px;
// border: 1px solid #efefef;
// :placeholder {
//   color: #757575;
// }
// transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
// :hover,
// :focus {
//   border: 1px solid #000000;
// }
// `;

// export const Button = styled.button`
// font-weight: 600;
// font-size: 20px;
// display: flex;
// align-items: center;
// gap: 14px;
// width: fit-content;
// padding: 10px;
// margin-top: 15px;
// margin-left: 15px;
// margin-right: 20px;
// background-color: whitesmoke;
// border: 1px solid black;
// border-radius: 10px;
// cursor: pointer;
// transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
// :hover,
// :focus {
//   color: white;
//   background-color: black;
//   border: 1px solid #000000;
//   > svg {
//     fill: white;
//   }
// }
// `;