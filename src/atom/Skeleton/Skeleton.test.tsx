import React from 'react';
import { render, getByTestId } from '@src/test-utils';
import Skeleton, { SkeletonProps } from '@src/atom/Skeleton';

function renderInput(props: SkeletonProps) {
  return render(<Skeleton {...props} />);
}

describe('<Skeleton />', () => {
  it('컴포넌트는 정상적으로 렌더링되어야 한다.', () => {
    const { container } = renderInput({});
    expect(container).toBeInTheDocument();
    expect(getByTestId(container, 'skeleton')).toHaveClass('_SKELETON_');
  });

  context('props를 넘기는 상황에서', () => {
    it('variant props를 넘기면 컴포넌트에 반영된다', () => {
      const { container } = renderInput({ variant: 'rect' });
      expect(getByTestId(container, 'skeleton')).toHaveClass('rect');
    });
    it('animation props를 넘기면 컴포넌트에 반영된다', () => {
      const { container } = renderInput({ animation: 'wave' });
      expect(getByTestId(container, 'skeleton')).toHaveClass('wave');
    });
    it('size props를 넘기면 컴포넌트에 반영된다', () => {
      const { container } = renderInput({ size: 'md' });
      expect(getByTestId(container, 'skeleton')).toHaveClass('md');
    });
    it('children props를 넘기면 컴포넌트에 반영된다', () => {
      const { container } = renderInput({ children: 'test' });
      expect(getByTestId(container, 'skeleton')).toHaveTextContent('test');
    });
  });
});
