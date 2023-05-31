import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Backdrop, ModalWrapper, Wrapper, Title, Button } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose, title }) {
  useEffect(() => {
    const onPessKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [onClose]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <Wrapper>
          <Title>{title}</Title>
          <Button type="button" onClick={onClose}>
            <AiOutlineClose />
          </Button>
        </Wrapper>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
