import { ChangeEventHandler } from "react";

import styles from "./TextArea.module.css";

interface Props {
    name: string;
  id: string;

  placeholder?: string | undefined;
  value?: string | number | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;

  disabled?: boolean;

  className?: string;
}

const TextArea = ({ name, id, className, placeholder, onChange, value, disabled }: Props) => {
  return (
    <textarea
        name={name}
        id={id}
        className={`${styles.container} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
     />
  );
}

export default TextArea;