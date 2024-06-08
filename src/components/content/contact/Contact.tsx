import Section from "@/components/division/section/Section";
import SubHeader from "@/components/text/subHeader/SubHeader";
import ContactForm from "./contactForm/ContactForm";

import styles from "./Contact.module.css";
import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";

const Contact = () => {
  return (
    <Section id="contato" vertical>
      <AnimateOnVisible animationType="fadeInLeft">
          <SubHeader>Contato</SubHeader>
      </AnimateOnVisible>
      <AnimateOnVisible animationType="fadeInLeft" delay={300}>
          <p>Me mande um email!</p>
      </AnimateOnVisible>
      <AnimateOnVisible animationType="fadeInLeft" delay={600}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
      </AnimateOnVisible>
    </Section>
  );
}

export default Contact;