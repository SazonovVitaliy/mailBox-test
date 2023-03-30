import { FC, ReactNode } from "react";

import cn from "classnames";
import s from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <span className={cn(s.button, className)} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
