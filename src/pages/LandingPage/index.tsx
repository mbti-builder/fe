import React from 'react';
import { setLoading, useAppDispatch, useUiState } from '@src/store';
import Button from '@src/atom/Button';
import ToastView from '@src/atom/ToastView';

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useUiState();

  return (
    <div>
      <Button
        labelText="toggle"
        onClick={() => dispatch(setLoading({ isLoading: !isLoading }))}
      />
      <div>{isLoading ? 'loading' : 'break'}</div>
      <ToastView message="message" />
    </div>
  );
};

export default LandingPage;
