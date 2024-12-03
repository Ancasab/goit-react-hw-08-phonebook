// import styled from '@emotion/styled';

// // Label component with improved responsiveness
// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   font-size: 16px;
//   font-weight: 500;

//   @media (max-width: 768px) {
//     font-size: 14px;  // Smaller font size for tablets
//   }

//   @media (max-width: 480px) {
//     font-size: 12px;  // Even smaller font size for mobile screens
//   }
// `;

// // Input component with improved responsiveness
// export const Input = styled.input`
//   width: 100%;  // Make the input take full width of its parent container
//   max-width: 350px;  // Limit maximum width on large screens
//   padding: 15px 20px;  // Reduced padding for better usability on smaller screens
//   color: #000000;
//   background: #efefef;
//   border-radius: 18px;
//   border: 1px solid #efefef;
//   transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   ::placeholder {
//     color: #757575;
//   }

//   &:hover,
//   &:focus {
//     border: 1px solid #000000;
//   }

//   @media (max-width: 768px) {
//     max-width: 300px;  // Adjust maximum width on tablet
//     padding: 12px 16px;  // Reduce padding for smaller screens
//   }

//   @media (max-width: 480px) {
//     max-width: 280px;  // Adjust max width for small screens
//     padding: 10px 12px;  // Reduce padding further for small screens
//   }
// `;


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