import { Helmet } from "react-helmet";
import HeaderSection from "./HeaderSection";
import OurServices from "./OurServices";
import ClientSaysSection from "../Homepage/ClientSaysSection";
import WhyChooseUs from "./WhyChooseUs";
import "../../styles/Services.scss";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services</title>
        <meta name="description" content="Expolre Our Services" />
        <link rel="canonical" href="https://digisurfaustralia.com.au/services" />
      </Helmet>
      <HeaderSection title="Our Services" />
      <OurServices />
      <WhyChooseUs />
      <ClientSaysSection />
    </div>
  );
};

export default Services;
