import React from 'react';
import { setLoading, useAppDispatch, useUiState } from '@src/store';
import Button from '@src/atom/Button';
import Text from '@src/atom/Text';

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useUiState();

  return (
    <div>
      <Button
        labelText="toggle"
        onClick={() => dispatch(setLoading({ isLoading: !isLoading }))}
      />
      <div>{isLoading ? Text({ children: 'loading' }) : Text({ children: 'break' })}</div>
    </div>
  );
};

export default App;
