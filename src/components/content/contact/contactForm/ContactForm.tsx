"use client"    

import TextArea from "@/components/form/textArea/TextArea";
import TextField from "@/components/form/textField/TextField";
import LinkButton from "@/components/text/linkButton/LinkButton";
import { ChangeEvent } from "react";

const ContactForm = () => {
  function handleEmailToChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleEmailSubjectChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    throw new Error("Function not implemented.");
  }

  function handleEmailContentChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <form>
      <TextField
        onChange={handleEmailToChange}
        name="to"
        id="to"
        placeholder="Para"
        value="freitaslira18@gmail.com"
        disabled
      />
      <TextField
        onChange={handleEmailSubjectChange}
        name="subject"
        id="subject"
        placeholder="Assunto"
      />
      <TextArea
        onChange={handleEmailContentChange}
        name="content"
        id="content"
      />
      <LinkButton href="mailto:freitaslira18@gmail.com">
        Enviar
      </LinkButton>
    </form>
  );
};

export default ContactForm;
