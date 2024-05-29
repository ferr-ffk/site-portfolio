import { ChangeEvent, ChangeEventHandler } from "react";
import styles from "./Input.module.css";

interface Props {
  name: string;
  id: string;

  placeholder?: string | undefined;
  value?: string | number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;

  className?: string;
}

const TextField = ({ name, id, className, placeholder, onChange, value }: Props) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className={`${styles.container} ${className}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextField;
