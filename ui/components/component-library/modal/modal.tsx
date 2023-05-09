import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import { ModalProps } from './modal.types';
import { ModalContext } from './modal.context';

export const Modal: React.FC<ModalProps> = ({
  className = '',
  isOpen,
  onClose,
  children,
  isClosedOnOutsideClick = true,
  isClosedOnEscapeKey = true,
  autoFocus = true,
  initialFocusRef,
  finalFocusRef,
  restoreFocus,
  ...props
}) => {
  const context = {
    isOpen,
    onClose,
    isClosedOnOutsideClick,
    isClosedOnEscapeKey,
    autoFocus,
    initialFocusRef,
    finalFocusRef,
    restoreFocus,
  };
  return isOpen
    ? ReactDOM.createPortal(
        <ModalContext.Provider value={context}>
          <div className={classnames('mm-modal', className)} {...props}>
            {children}
          </div>
        </ModalContext.Provider>,
        document.body,
      )
    : null;
};

export default Modal;
