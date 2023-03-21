import { SizeType } from "../utils/global-types";
import { joinClassName } from "../utils/global-function";
import { PropsWithChildren } from "react";

interface Props {
  size?: SizeType;
}

export const Button = ({
  size = "md",
  children,
}: Props & PropsWithChildren) => {
  const classNames = joinClassName('button', `size-${size}`);
  return <button className={classNames}>{children}</button>;
};
