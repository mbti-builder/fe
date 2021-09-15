import React from 'react';
import { render } from '@testing-library/react';

import App from './App';


describe('App', () => {
  function renderApp() {
    return render(
        <App />
    );
  }

  context('컴포넌트가', () => {
    it('정상적으로 렌더링된다', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('test');
    });
  });
});
