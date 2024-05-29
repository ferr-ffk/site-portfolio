import Section from "@/components/division/section/Section";
import Input from "@/components/form/text/Input";
import SubHeader from "@/components/text/subHeader/SubHeader";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <div>
          <Input name="Teste" id="teste" />
        </div>
    </Section>
  );
}

export default Contact;