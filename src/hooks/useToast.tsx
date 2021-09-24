import React, { useState } from 'react';
import Text from '@src/atom/Text';
import Button from '@src/atom/Button';

type Toast = {
  id: number;
  message: string;
};

const Toast = (
  toast: Toast,
  removeToast: (event: React.MouseEvent) => void,
) => {
  return (
    <li key={toast.id} className={'toast'} aria-label={`${toast.id}-toast`}>
      <Text
        children={toast.message}
        fontSize="xs"
        lineHeight="narrow"
      />
      <Button
        onClick={removeToast}
        aria-label={`${toast.id}-toast-close-btn`}
        data-toast-id={toast.id}
        variant={'quiet'}
        size={'xs'}
        children={'x'}
        buttonColor={'red'}
      />
    </li>
  );
};

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [id, setId] = useState(0);

  const removeToast = (event: React.MouseEvent) => {
    const targetId = (event.currentTarget as HTMLDataListElement).dataset
      .toastId as string;
    setToasts(toasts.filter((t) => t.id !== parseInt(targetId)));
  };

  const addToast = (message: string) => {
    setId(id + 1);
    setToasts([
      {
        id,
        message,
      },
      ...toasts,
    ]);
  };

  const renderToast = () => {
    return (
      <ul aria-label="toasts">
        {toasts.map((toast) => Toast(toast, removeToast))}
      </ul>
    );
  };

  return { addToast, renderToast };
};

export default useToast;
