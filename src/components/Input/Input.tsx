import { ChangeEvent, FC } from "react";

import cn from "classnames";
import s from "./input.module.scss";

interface InputProps {
  type?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  onChange,
  className,
  placeholder = "Введите название",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(s.input, className)}
      onChange={onChange}
    />
  );
};

export default Input;
