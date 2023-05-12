import React from 'react';
import { ColorType, ShadowType, SizeType, VariantType } from '../../utilities/global-types';
import { joinClassName } from '../../utilities/global-function';
import { PropsWithChildren } from 'react';

interface Props {
  size?: SizeType;
  variant?: VariantType;
  shadow?: ShadowType;
  color?: ColorType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant = 'outline',
  size = 'md',
  shadow,
  color,
  disabled = false,
  onClick,
  children,
}: Props & PropsWithChildren) => {
  const classNames = joinClassName(
    'button',
    `size-${size}`,
    shadow ? `shadow-${shadow}` : '',
    color ? `background-color-${color}` : `variant-${variant}`
  );
  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
