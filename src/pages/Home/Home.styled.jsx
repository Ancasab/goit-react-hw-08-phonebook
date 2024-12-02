import styled from '@emotion/styled';
import image from '../../images/antique-dial-phone-rotary-black-95536845.jpeg';

export const Container = styled.div`
  position: relative;
  padding: 0;
  height: 100vh;
  overflow: hidden;
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
`;

export const TextWrapper = styled.div`
display: flex;
  flex-direction:column;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  min-height:200px;
  
  
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 73px;
  text-align: center;
  font-family: 'Rubik Wet Paint', cursive;
  
`;
export const Message = styled.p`
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
  font-family: 'Rubik Wet Paint', cursive;
  
`; 





