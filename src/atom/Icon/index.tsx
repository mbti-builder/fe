import React, { ReactElement } from 'react';
import cn from 'classnames';
import './Icon.scss';
import { customTypes } from 'custom-types';

export interface IconProps {
  iconName?: string;
  size?: customTypes.ElementSize;
  color?: customTypes.ElementColor;
  pointer?: boolean;
}

const Icon = ({
  iconName = 'search',
  size = 'md',
  color = 'black',
  pointer = false,
}: IconProps): ReactElement => {
  return (
    <span
      className={cn('material-icons', '_ICON_', { pointer })}
      style={{ fontSize: size, color }}
      data-testid="icon"
    >
      {iconName}
    </span>
  );
};

export default Icon;
