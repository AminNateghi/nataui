import { SizeType, VariantType } from "../utils/global-types";
import { joinClassName } from "../utils/global-function";
import { PropsWithChildren } from "react";

interface Props {
  size?: SizeType;
  variant?: VariantType;
}

export const Button = ({
  variant = "outline",
  size = "md",
  children,
}: Props & PropsWithChildren) => {
  const classNames = joinClassName(
    "button",
    `size-${size}`,
    `variant-${variant}`,
  );
  return <button className={classNames}>{children}</button>;
};
