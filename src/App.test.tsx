import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

function renderApp() {
  return render(<App />);
}

describe('<App>', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.MockedFunction<typeof useDispatch>).mockImplementation(
      () => dispatch,
    );

    (useSelector as jest.MockedFunction<typeof useSelector>).mockImplementation(
      (selector) =>
        selector({
          ui: { isLoading: true },
        }),
    );
  });

  context('컴포넌트에서', () => {
    it('텍스트가 제대로 렌더링 되는지 확인한다', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('toggleloading');
    });
  });
});
