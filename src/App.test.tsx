import React from 'react';

import { render, screen, fireEvent } from '@src/test-utils';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

const renderApp = ({ path }: { path: string }) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
};

describe('<App>', () => {
  context('/ 경로로 이동시', () => {
    beforeEach(() => {
      renderApp({ path: '/' });
    });

    it('렌더링 되었을 때 default text는 break 이어야 한다.', () => {
      expect(screen.getByText('toggle')).toBeInTheDocument();
    });

    it('toggle 버튼을 클릭하면 text는 loading과 break 로 번갈아 변경되어야 한다.', () => {
      fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
      expect(screen.getByText('loading')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
      expect(screen.getByText('break')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
      expect(screen.getByText('loading')).toBeInTheDocument();
    });
  });
});
