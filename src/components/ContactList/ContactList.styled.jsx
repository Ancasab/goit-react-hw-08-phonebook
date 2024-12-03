import styled, { keyframes } from 'styled-components';

export const ListContact = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  width: 100%; /* Ensure it takes the full width */

  @media (max-width: 768px) {
    margin-top: 15px; /* Reduce margin on smaller screens */
    padding: 0 20px; /* Add more padding for mobile */
  }

  @media (max-width: 480px) {
    padding: 0 15px; /* Tighter padding for very small screens */
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap; /* Allow items to wrap into rows */
    gap: 20px; /* Add space between items */
  }
`;

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the contact details on top of each other */
    align-items: flex-start; /* Align left */
    padding: 10px 0; /* More vertical padding */
  }

  @media (max-width: 480px) {
    padding: 5px 0; /* Less padding on very small screens */
  }
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 250px; /* Adjust min-width for smaller screens */
  }

  @media (max-width: 480px) {
    min-width: 200px; /* Reduce further for very small screens */
    font-size: 14px; /* Smaller font size on mobile */
  }
`;

export const ContactData = styled.p`
  font-size: 25px;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Even smaller font size for small screens */
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 17px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 5px 15px; /* Adjust padding for tablet */
    font-size: 15px; /* Slightly smaller font size */
  }

  @media (max-width: 480px) {
    padding: 5px 12px; /* Tighter padding on mobile */
    font-size: 14px; /* Even smaller font size for mobile */
    margin-left: 10px; /* Reduced margin for small screens */
  }

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;
  animation: ${spin} 1s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 50px; /* Adjust for tablet */
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin-left: 30px; /* Adjust for mobile */
  }
`;


// import styled, {keyframes} from 'styled-components'

// export const ListContact = styled.ul`
//   margin-top: 30px;
//   display: flex;
//   flex-direction: column;
//   margin-left: auto;
//   margin-right: auto;
//   // gap: 20px;
  
// `;

// export const ContactItems = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // margin-bottom: 10px;
 
// `;
// export const Text = styled.p`
//   display: inline-block;
//   min-width: 300px;
// `;

// export const ContactData = styled.p`
//   font-size: 25px;
//   margin-right: 10px;
// `;


// export const Button = styled.button`
//   padding: 5px 20px;
//   margin-left: 20px;  
//   font-size: 17px;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #007bff;
//     color: #fff;
//   }
  
// `;

// const spin = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// export const Spinner = styled.div`
//   border: 4px solid rgba(0, 0, 0, 0.1);
//   border-top-color: #333;
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   margin-bottom: 20px;
//   margin-left: 70px;

//   animation: ${spin} 1s ease-in-out infinite;
// `;