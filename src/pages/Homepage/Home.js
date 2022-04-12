import { useEffect } from "react";
import HeaderSection from "./HeaderSection";
// import WhyLikeUsSection from "./WhyLikeUsSection";
import AboutUsSection from "./AboutUsSection";
import OurServicesSection from "./OurServicesSection";
import WeOfferSection from "./WeOfferSection";
import OurTeamSection from "./OurTeamSection";
import ProgressSection from "./ProgressSection";
import OurProjects from "./OurProjects";
import StatisticsSection from "./StatisticsSection";
import ClientSaysSection from "./ClientSaysSection";
import BuildBusiness from "./BuildBusiness";
import BlogSection from "./BlogSection";
import Aos from "aos";
import "aos/dist/aos.css";
import TechnologiesSection from "./TechnologiesSection";
import "./FAQ";
import AccordianApp from "./AccordianApp";
import FAQ from "./FAQ";

const Home = () => {
  useEffect(() => {
    Aos.init({  
      duration: 50,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div className="main">
      <HeaderSection />
      {/* <WhyLikeUsSection />
      <AboutUsSection /> */}
      <OurServicesSection />
      <TechnologiesSection />
      {/* <WeOfferSection /> */}
      <AboutUsSection />
      {/* <OurTeamSection /> */}
      {/* <ProgressSection /> */}

      {/* <FAQ SECTION /> */}
      <AccordianApp/>
      
        {/* <FAQ SECTION /> */}

      <OurProjects />
      {/* <StatisticsSection /> */}
      <ClientSaysSection />
      <BuildBusiness />
      <BlogSection />
    </div>
  );
};

export default Home;
