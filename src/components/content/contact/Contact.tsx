import Section from "@/components/division/section/Section";
import Input from "@/components/form/text/Input";
import SubHeader from "@/components/text/subHeader/SubHeader";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <p>Me mande um email!</p>
        <div>
          <Input name="to" id="to" placeholder="Para" value="freitaslira18@gmail.com" disabled/>
          <Input name="subject" id="subject" placeholder="Assunto" />
        </div>
    </Section>
  );
}

export default Contact;