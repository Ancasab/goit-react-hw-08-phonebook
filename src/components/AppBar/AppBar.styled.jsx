import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;  // Added to align items in header properly
  align-items: baseline;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(45deg, #ADD8E6, #00008B);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Added subtle shadow for better separation

  // Optional: Add media query for responsiveness
  @media (max-width: 768px) {
    padding: 15px;  // Reduced padding on smaller screens
  }
`;



// import styled from '@emotion/styled';

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   padding: 20px 20px;
//   // border-bottom: 3px solid red;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   // background: linear-gradient(45deg, #FF6B6B, #3E8AC5);
//   background: linear-gradient(45deg, #ADD8E6, #00008B);
// `;