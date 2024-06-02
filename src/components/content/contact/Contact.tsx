import Section from "@/components/division/section/Section";
import TextArea from "@/components/form/textArea/TextArea";
import TextField from "@/components/form/textField/TextField";
import SubHeader from "@/components/text/subHeader/SubHeader";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <p>Me mande um email!</p>
        <div>
          <TextField name="to" id="to" placeholder="Para" value="freitaslira18@gmail.com" disabled/>
          <TextField name="subject" id="subject" placeholder="Assunto" />
          <TextArea name="content" id="content" />
        </div>
    </Section>
  );
}

export default Contact;