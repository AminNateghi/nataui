import { ColorType, ShadowType, SizeType, VariantType } from '../../utilities/global-types';
import { PropsWithChildren } from 'react';
interface Props {
    size?: SizeType;
    variant?: VariantType;
    shadow?: ShadowType;
    color?: ColorType;
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ variant, size, shadow, color, disabled, onClick, children, }: Props & PropsWithChildren) => JSX.Element;
export {};
