"use client";

import TextArea from "@/components/form/textArea/TextArea";
import TextField from "@/components/form/textField/TextField";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";

import styles from "./ContactForm.module.css";
import Button from "@/components/layout/button/Button";

const ContactForm = () => {
  const router = useRouter();

  let to: string;
  let subject: string;
  let content: string;

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    router.push(`mailto:freitaslira18@gmail.com?subject=${subject}&body=${content}`);
  }

  function handleSubjectChange(event: ChangeEvent<HTMLInputElement>): void {
    subject = event.currentTarget.value;
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    content = event.currentTarget.value;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        name="to"
        id="to"
        placeholder="Para"
        value="freitaslira18@gmail.com"
        disabled
      />
      <TextField
        onChange={handleSubjectChange}
        name="subject"
        id="subject"
        placeholder="Assunto"
      />
      <TextArea onChange={handleContentChange} name="content" id="content" />
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default ContactForm;
