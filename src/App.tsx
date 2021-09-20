import React from 'react';
import { setLoading, useAppDispatch, useUiState } from '@src/store';
import Button from '@src/atom/Button';

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useUiState();

  return (
    <div>
      <Button
        labelText="toggle"
        onClick={() => dispatch(setLoading({ isLoading: !isLoading }))}
      />
      <div>{isLoading ? 'loading' : 'break'}</div>
    </div>
  );
};

export default App;
