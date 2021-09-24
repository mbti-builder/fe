import React, { HTMLAttributes } from 'react';
import './ToastView.scss';
import Button from '@src/atom/Button';
import useToast from '@src/hooks/useToast';


export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

const ToastView = ({ message }: ToastProps) => {
  const { addToast, renderToast } = useToast();

  return (
    <div className='_TOAST_VIEW_'>
      <Button
        aria-label="toast-btn"
        onClick={() => {
          addToast(message);
        }}
        children={'toast'}
        variant={'minimal'}
        size={'xs'}
      />
      {renderToast()}
    </div>
  );
};

export default ToastView;
