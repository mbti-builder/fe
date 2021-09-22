import React from 'react';
import { render, fireEvent, screen } from '@src/test-utils';

import LadingPage from '@src/pages/LandingPage';

describe('기본 test', () => {
  it('컴포넌트는 정상적으로 렌더링되어야 한다.', () => {
    const { container } = render(<LadingPage />);
    expect(container).toBeInTheDocument();
  });
});

describe('Redux 예시 test', () => {
  beforeEach(() => {
    render(<LadingPage />);
  });

  it('렌더링 되었을 때 default text는 break 이어야 한다.', () => {
    expect(screen.getByText('break')).toBeInTheDocument();
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
