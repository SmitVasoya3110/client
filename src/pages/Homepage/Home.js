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

const Home = () => {
  useEffect(() => {
    Aos.init({  
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div>
      <HeaderSection />
      {/* <WhyLikeUsSection />
      <AboutUsSection /> */}
      <OurServicesSection />
      <TechnologiesSection />
      {/* <WeOfferSection /> */}
      <AboutUsSection />
      {/* <OurTeamSection /> */}
      {/* <ProgressSection /> */}
      <OurProjects />
      {/* <StatisticsSection /> */}
      <ClientSaysSection />
      <BuildBusiness />
      <BlogSection />
    </div>
  );
};

export default Home;
