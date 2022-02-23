import OurTeamCard from "./OurTeamCard";
import portfolio1 from "../../Images/portfolio1.jpeg";
import portfolio2 from "../../Images/portfolio2.jpeg";
import portfolio3 from "../../Images/portfolio3.jpeg";
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
                memberName="Creative Arts"
                memberDesg="Design, Branding"
              />
              <OurTeamCard
                photo={portfolio2}
                memberName="Creative Arts"
                memberDesg="Design, Branding"
              />
              <OurTeamCard
                photo={portfolio3}
                memberName="Creative Arts"
                memberDesg="Design, Branding"
              />
              <OurTeamCard
                photo={portfolio1}
                memberName="Creative Arts"
                memberDesg="Design, Branding"
              />
            </OwlCarousel>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <button className="btn-pri mt-5">
                View More <BsChevronDoubleRight />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
