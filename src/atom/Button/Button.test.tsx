import React from 'react';
import { render, getByTestId } from '@src/test-utils';

import Button, { ButtonProps } from '@src/atom/Button';

function renderButton(props: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return render(<Button {...props} />);
}

describe('<Button />', () => {
  it('컴포넌트는 정상적으로 렌더링되어야 한다.', () => {
    const { container } = renderButton({});
    expect(container).toBeInTheDocument();
  });

  context('props를 넘기는 상황에서', () => {
    it('className props를 넘기면 컴포넌트에 반영된다', () => {
      const className = 'amugeona';

      const { container } = renderButton({ className });
      const button = getByTestId(container, 'button');

      expect(button).toHaveClass(className);
    });
    it('size props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ size: 'lg' });
    });
    it('variant props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ variant: 'solid' });
    });
    it('disabled props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ disabled: true });
    });
    it('fullWidth props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ fullWidth: true });
    });
    it('rounded props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ rounded: true });
    });
    it('buttonColor props를 넘기면 컴포넌트에 반영된다', () => {
      //   const { container } = renderButton({ buttonColor: true });
    });
    it('disabled props를 넘기면 컴포넌트에 반영된다', () => {
      const labelText = 'hooker';

      const { container } = renderButton({ labelText });

      expect(container).toHaveTextContent(labelText);
    });
  });
});
