import Section from "@/components/division/section/Section";
import Input from "@/components/form/input/Input";
import SubHeader from "@/components/text/subHeader/SubHeader";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <div>
          <Input type="text" placeholder="placeholder" name="Text Field" id="text-field" required/>
        </div>
    </Section>
  );
}

export default Contact;