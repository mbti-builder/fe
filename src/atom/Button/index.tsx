import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import cn from 'classnames';
import './Button.scss';
import { customTypes } from 'custom-types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: customTypes.ElementSize;
  variant?: customTypes.ElementVariant;
  buttonColor?: customTypes.ElementColor;
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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      <span>{labelText ? <>{labelText} </> : children}</span>
    </button>
  );
};

export default Button;
