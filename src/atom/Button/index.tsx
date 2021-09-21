import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import cn from 'classnames';
import './Button.scss';

type ButtonSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariant = 'ghost' | 'solid' | 'quiet' | 'minimal';
type ButtonColor = 'black' | 'gray' | 'blue' | 'red';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  buttonColor?: ButtonColor;
  fullWidth?: boolean;
  rounded?: boolean;
  labelText?: string;
}

const Button = ({
  className,
  children,
  size = 'md',
  variant = 'solid',
  disabled,
  fullWidth,
  rounded,
  buttonColor = 'black',
  labelText,
  ...restProps
}: ButtonProps): ReactElement => {
  return (
    <button
      type="button"
      data-testid="button"
      className={cn(`_BUTTON_`, className, size, variant, buttonColor, {
        rounded,
        disabled,
        fullWidth,
      })}
      disabled={disabled}
      {...restProps}
    >
      <span>{labelText ? <>{labelText} </> : children}</span>
    </button>
  );
};

export default Button;
