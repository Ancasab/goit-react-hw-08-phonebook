import styled from '@emotion/styled';
import { FaWindowClose } from 'react-icons/fa';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);
  background: linear-gradient(45deg, #ADD8E6, #00008B);
  z-index: 1200;
`;

export const ModalContent = styled.div`
position: relative;
  border-radius: 15px;
  overflow: hidden;

  max-width: calc(100vw - 50px);
  max-height: calc(100vh - 24px);

  padding-left: 2px;
  padding-right: 2px;
  background-color: red;
`;

export const CloseIcon = styled(FaWindowClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;