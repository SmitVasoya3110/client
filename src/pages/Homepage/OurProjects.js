import OurTeamCard from "./OurTeamCard";
import portfolio1 from "../../Images/DigiSurf-Client1.png";
import portfolio2 from "../../Images/DigiSurf-Client2.png";
import portfolio3 from "../../Images/DigiSurf-Client3.png";
import portfolio4 from "../../Images/DigiSurf-Client4.png";
import portfolio5 from "../../Images/DigiSurf-Client5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsChevronDoubleRight } from "react-icons/bs";

const OurProjects = () => {
  const options = {
    margin: 10,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  };

  return (
    <section className="ourprojects-section mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h6 className="small-heading">Our Projects</h6>
              <h1 className="big-heading">
                Let's See Our Popular
                <br />
                Project
              </h1>
            </div>
          </div>
          <div className="row mb-4">
            <OwlCarousel className="owl-theme" nav {...options}>
              <OurTeamCard
                photo={portfolio1}
                memberName="Retro Birdie"
                memberDesg="Retro Birdie, a vintage Ice Cream and Desert Truck Hire. We have designed and developed the website and API’s for them. "
              />
              <OurTeamCard
                photo={portfolio2}
                memberName="Kell Co Legal"
                memberDesg="The Kell Co Legal provides personalised migration assistance and general legal services in a range of legal areas. We have developed the website and conducted SEO audit on the project."
              />
              <OurTeamCard
                photo={portfolio3}
                memberName="MyWriters"
                memberDesg="MyWriters is a content writing company. We have successfully designed and developed the UI/UX and Website for them."
              />
              <OurTeamCard
                photo={portfolio4}
                memberName="Printing 7"
                memberDesg="Printing 7 is a Bondi Beach based printing shop. We have developed a Printing Management Software application for them."
              />
              <OurTeamCard
                photo={portfolio5}
                memberName="Sunmoon Chemical"
                memberDesg="Sunmoon Chemical is an international company that produces medicines and mainly conducts activities related to the pharmacy industry. We have developed mobile app and website for them."
              />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
