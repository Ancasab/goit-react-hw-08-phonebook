import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalContent, Overlay, CloseIcon } from './Modal.styled';
import { FaWindowClose } from 'react-icons/fa';

export const Modal = ({ children, onCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onCloseModal();
  };

  return (
    isModalOpen && (
      <Overlay onClick={handleBackdropClick}>
        <ModalContent>
          {children}
          <CloseIcon onClick={handleCloseModal}>
            <FaWindowClose />
          </CloseIcon>
        </ModalContent>
      </Overlay>
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;