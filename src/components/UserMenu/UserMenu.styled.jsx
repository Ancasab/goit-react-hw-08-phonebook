import styled from '@emotion/styled';

export const UserNavigation = styled.div`
  display: flex;
  margin-left: auto;
  
  /* Ensure it behaves well on small screens */
  @media (max-width: 768px) {
    margin-left: 10px;
  }
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

  /* Responsive design */
  @media (max-width: 768px) {
    margin-right: 16px; /* Adjust margin on mobile */
    gap: 8px; /* Reduce gap for smaller screens */
  }
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem; /* More flexible font size */
  text-align: right;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem; /* More flexible font size */
  text-align: right;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

export const LogOutBtn = styled.button`
  font-family: 'Rubik Wet Paint', cursive;
  font-weight: 600;
  font-size: 1.5rem; /* More flexible font size */
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 10px 30px; /* Adjust padding for better mobile responsiveness */
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms, color 250ms, border 250ms, fill 250ms;

  &:hover,
  &:focus {
    color: white;
    background-color: #86b0ff;
    border: 1px solid #000000;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust button font size on mobile */
    padding: 8px 24px; /* Adjust padding on mobile */
  }
`;


// import styled from '@emotion/styled';

// export const UserNavigation = styled.div`
//   display: flex;
//   margin-left: auto;
// `;
// export const UserWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   gap: 12px;
//   margin-right: 32px;

//   > div {
//     display: grid;
//     align-items: center;
//     gap: 6px;
//   }
// `;

// export const UserName = styled.p`
//   font-style: normal;
//   font-weight: 600;
//   font-size: 20px;

//   text-align: right;

//   color: white;
// `;
// export const UserEmail = styled.p`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 20px;

//   text-align: right;

//   color: white;
// `;


// export const LogOutBtn = styled.button`
// font-family: 'Rubik Wet Paint', cursive;
// font-weight: 600;
// font-size: 30px;
// margin-top: 20px;
// margin-bottom: 5px;
// padding: 15px 40px;
// background-color: whitesmoke;
// border: 1px solid black;
// border-radius: 10px;
// cursor: pointer;
// transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);


// :hover,
// :focus {
//   color: white;
//   background-color: #86b0ff;
//   border: 1px solid #000000;
// }
// `;