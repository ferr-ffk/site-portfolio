import styles from "./Input.module.css";

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
  name: string;
  id: string;

  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  value?: number | string | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;

  className?: string;

  required?: boolean;
}

const Input = ({
  name,
  id,
  type,
  placeholder,
  value,
  className,
  onChange,
  required,
}: Props) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.label} ${required ? styles.required : ""}`}
      >
        {name}
      </label>
      <input
        name={name}
        id={id}
        className={`${styles.container} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
