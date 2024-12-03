import styled from '@emotion/styled';
import image from '../../images/antique-dial-phone-rotary-black-95536845.jpeg';

export const Container = styled.div`
  position: relative;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  filter: brightness(70%); /* Optional: darken the background image */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
  padding: 20px;
  border-radius: 10px;
  min-height: 200px;
  max-width: 90%; /* Ensure content doesn't overflow on small screens */
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 150px;
  }
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 6vw; /* Responsive font size based on viewport width */
  text-align: center;
  font-family: 'Rubik Wet Paint', cursive;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional text shadow for better readability */

  @media (max-width: 768px) {
    font-size: 10vw; /* Adjust font size for smaller screens */
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 2rem; /* Responsive font size */
  text-align: center;
  font-family: 'Rubik Wet Paint', cursive;
  color: #000;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Optional text shadow for better readability */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;




// import styled from '@emotion/styled';
// import image from '../../images/antique-dial-phone-rotary-black-95536845.jpeg';

// export const Container = styled.div`
//   position: relative;
//   padding: 0;
//   height: 100vh;
//   overflow: hidden;
// `;

// export const ImageBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${image});
//   background-size: cover;
//   background-position: center;
// `;

// export const TextWrapper = styled.div`
// display: flex;
//   flex-direction:column;
//   justify-content: space-around;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 10px;
//   border-radius: 10px;
//   min-height:200px;
  
  
// `;

// export const Text = styled.h1`
//   margin: 0;
//   font-size: 73px;
//   text-align: center;
//   font-family: 'Rubik Wet Paint', cursive;
  
// `;
// export const Message = styled.p`
//   margin-top: 10px;
//   font-size: 30px;
//   text-align: center;
//   font-family: 'Rubik Wet Paint', cursive;
  
// `; 





