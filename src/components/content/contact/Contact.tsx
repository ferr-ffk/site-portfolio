import Section from "@/components/division/section/Section";
import SubHeader from "@/components/text/subHeader/SubHeader";
import ContactForm from "./contactForm/ContactForm";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Section id="contato" vertical>
        <SubHeader>Contato</SubHeader>
        <p>Me mande um email!</p>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
    </Section>
  );
}

export default Contact;