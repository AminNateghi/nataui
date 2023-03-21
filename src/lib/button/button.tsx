import { ShadowType, SizeType, VariantType } from "../utils/global-types";
import { joinClassName } from "../utils/global-function";
import { PropsWithChildren } from "react";

interface Props {
  size?: SizeType;
  variant?: VariantType;
  shadow?: ShadowType;
}

export const Button = ({
  variant = "outline",
  size = "md",
  shadow,
  children,
}: Props & PropsWithChildren) => {
  const classNames = joinClassName(
    "button",
    `size-${size}`,
    `variant-${variant}`,
    shadow ? `shadow-${shadow}` : '',
  );
  return <button className={classNames}>{children}</button>;
};
