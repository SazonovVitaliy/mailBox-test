import { ChangeEvent, FC } from "react";

import cn from "classnames";
import s from "./input.module.scss";

interface InputProps {
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  className,
  placeholder = "Введите название",
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={cn(s.input, className)}
      onChange={onChange}
    />
  );
};

export default Input;
