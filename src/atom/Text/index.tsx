import React, { HTMLAttributes } from 'react';
import './Text.scss';
import cn from 'classnames';

type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';
type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
type TextAlign = 'start' | 'center' | 'end';
type LineHeight = 'narrow' | 'normal' | 'wide';

export interface TextProps
  extends HTMLAttributes<
    HTMLDivElement | HTMLSpanElement | HTMLHeadingElement
  > {
  className?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  lineHeight?: LineHeight;
}

export default function Text({
  children,
  className,
  fontSize = 'md',
  fontWeight = 'regular',
  textAlign,
  lineHeight,
}: TextProps) {
  return (
    <span
      className={cn(
        `_TEXT_`,
        `font-size-${fontSize}`,
        `font-weight-${fontWeight}`,
        `text-align-${textAlign}`,
        `line-height-${lineHeight}`,
        className,
      )}
    >
      {children}
    </span>
  );
}
