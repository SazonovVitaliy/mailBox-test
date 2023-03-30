import { FC, ReactNode } from "react";

import cn from "classnames";
import s from "./button.module.scss";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <span className={cn(s.button, className)} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
