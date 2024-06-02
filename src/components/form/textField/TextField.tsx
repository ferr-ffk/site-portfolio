import { ChangeEventHandler } from "react";
import styles from "./TextField.module.css";

interface Props {
  name: string;
  id: string;

  placeholder?: string | undefined;
  value?: string | number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;

  disabled?: boolean;

  className?: string;
}

const TextField = ({ name, id, className, placeholder, onChange, value, disabled }: Props) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className={`${styles.container} ${className}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextField;
