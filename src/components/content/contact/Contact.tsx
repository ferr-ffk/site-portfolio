import Section from "@/components/division/section/Section";
import TextArea from "@/components/form/textArea/TextArea";
import TextField from "@/components/form/textField/TextField";
import LinkButton from "@/components/text/linkButton/LinkButton";
import SubHeader from "@/components/text/subHeader/SubHeader";
import { ChangeEvent } from "react";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <p>Me mande um email!</p>
        <ContactForm />
    </Section>
  );
}

export default Contact;