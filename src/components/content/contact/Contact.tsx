import Section from "@/components/division/section/Section";
import Input from "@/components/form/input/Input";
import TextArea from "@/components/form/textArea/TextArea";
import SubHeader from "@/components/text/subHeader/SubHeader";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <p>Me mande um email!</p>
        <div>
          <Input name="to" id="to" placeholder="Para" value="freitaslira18@gmail.com" disabled/>
          <Input name="subject" id="subject" placeholder="Assunto" />
          <TextArea name="content" id="content" />
        </div>
    </Section>
  );
}

export default Contact;