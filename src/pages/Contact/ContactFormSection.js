import { useState } from "react";
import ContactForm from "./ContactForm";
import SentMessage from "./SentMessage";

const ContactFormSection = () => {

  const [msg, setMsg] = useState(false);

  return (
    <section className="cf-section">
      {
        msg ? <SentMessage /> : <ContactForm setMsg={setMsg} />
      }
    </section>
  );
};

export default ContactFormSection;
