import { ColorType, ShadowType, SizeType, VariantType } from '../utils/global-types';
import { joinClassName } from '../utils/global-function';
import { PropsWithChildren } from 'react';

interface Props {
  size?: SizeType;
  variant?: VariantType;
  shadow?: ShadowType;
  color?: ColorType;
}

export const Button = ({
  variant = 'outline',
  size = 'md',
  shadow,
  color,
  children,
}: Props & PropsWithChildren) => {
  const classNames = joinClassName(
    'button',
    `size-${size}`,
    shadow ? `shadow-${shadow}` : '',
    color ? `background-color-${color}` : `variant-${variant}`,
    color ? `color-white` : ''
  );
  return <button className={classNames}>{children}</button>;
};
