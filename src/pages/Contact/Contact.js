// import HeaderSection from "../../components/HeaderSection";
import { Helmet } from "react-helmet";
import ContactFormSection from "./ContactFormSection";
import OurLocation from "./OurLocation";
import "../../styles/Contact.scss";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with Digisurf Australia" />
        <link rel="canonical" href="https://digisurfaustralia.com.au/contact" />
      </Helmet>
      {/* <HeaderSection title="Contact" /> */}
      <ContactFormSection />
      <OurLocation />
    </div>
  );
};

export default Contact;
