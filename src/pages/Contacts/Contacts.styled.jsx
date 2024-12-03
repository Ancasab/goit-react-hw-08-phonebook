import styled from '@emotion/styled';
import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)`
  width: 1.25rem;  /* Using relative units */
  height: 1.25rem; /* More flexible for scaling */
  fill: black;
`;

export const PageContainer = styled.div`
  padding: 40px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  /* Optional: Background gradient */
  // background: radial-gradient(circle, #FFD700, #FF6B6B, #3E8AC5);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  
  /* Responsive Design */
  @media (max-width: 768px) {
    margin-bottom: 16px;  /* Adjust margin on smaller screens */
  }
`;

export const Title = styled.h2`
  font-family: 'Rubik Wet Paint', cursive;
  font-weight: 700;
  font-size: 2.5rem;  /* More flexible font size */
  margin-left: 20px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;  /* Adjust font size for mobile */
    margin-left: 10px;  /* Adjust margin for mobile */
    margin-right: 10px;
  }
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
  font-size: 1rem;  /* Adjusted for better readability */
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 20px 25px;  /* Adjusted padding for better usability */
  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;
  
  &::placeholder {
    color: #757575;
  }

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #000000;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    width: 200px;  /* Adjust width for smaller screens */
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 1rem;  /* Adjust font size for better flexibility */
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: fit-content;
  padding: 10px 25px;  /* Adjust padding for mobile devices */
  margin-left: 15px;
  margin-right: 20px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  
  /* Combined transition for better readability */
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    border: 1px solid #000000;
    > svg {
      fill: white;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 0.9rem;  /* Adjust font size for mobile */
    padding: 8px 20px;  /* Adjust padding for mobile */
  }
`;


// import styled from '@emotion/styled';
// import { FaUserPlus } from 'react-icons/fa';

// export const AddUserIcon = styled(FaUserPlus)`
//   width: 20px;
//   height: 20px;
  
//   fill: black;
// `;
// export const PageContainer = styled.div`
//   padding: 40px 40px;
//   height: 100vh;

 
//   // background: radial-gradient(circle, #FFD700, #FF6B6B, #3E8AC5);
// `;
// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 28px;
// `;
// export const Title = styled.h2`
// font-family: 'Rubik Wet Paint', cursive; 
//   font-weight: 700;
//   font-size: 50px;
  
//   margin-left: 20px;
// `;

// export const FilterWrapper = styled.div`
//   display: flex;
//   margin-left: auto;
// `;

// export const Form = styled.form``;

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
//   font-weight: 600;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   max-width: fit-content;
//   padding: 10px;
//   margin-left: 15px;
//   margin-right: 20px;
//   background-color: whitesmoke;
//   border: 1px solid black;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   :hover,
//   :focus {
//     color: white;
//     background-color: black;
//     border: 1px solid #000000;
//     > svg {
//       fill: white;
//     }
//   }
// `;