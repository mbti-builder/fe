import React, { useState } from 'react';

import Modal, { ModalProps } from '@src/atom/Modal';

const useModal = () => {
  const [fadeout, setFadeout] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleFadeout = async () => {
    await setFadeout(true);

    setTimeout(() => {
      hide();
      setFadeout(false);
    }, 500);
  };

  const RenderModal = ({ children, ...restProps }: ModalProps) => (
    <>
      {isVisible && (
        <Modal closeModal={handleFadeout} fadeout={fadeout} {...restProps}>
          {children}
        </Modal>
      )}
    </>
  );

  return {
    show,
    hide: handleFadeout,
    RenderModal,
  };
};

export default useModal;
