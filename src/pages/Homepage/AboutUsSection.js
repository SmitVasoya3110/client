import cta from "../../Images/ABOUT-US.png";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";

const AboutUsSection = () => {
  return (
    <section className="aboutus-section" id="about-us">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center mt-5">
              <img
                src={cta}
                alt="aboutus-img"
                className="mb-5 block-img imgbounce w-100"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h6 className="small-heading center">About Us</h6>
              <h1 className="big-heading mb-4">
                We Are Specialized In Business Solution
              </h1>
              <p className="mb-4">
                By partnering with <strong>Digisurf</strong>, you will be able
                to leverage our collective knowledge and experience to improve
                business performance and revolutionize business growth. Our goal
                as a growing IT and digital service provider is to form
                long-term strategic alliances with you while assisting you in
                overcoming your most challenging software development
                challenges. We provide a variety of <strong>IT services</strong>
                , as well as <strong>Marketing Services</strong>, all of which
                are tailored to the specific needs of our affiliates.
              </p>
              <h3>
                We provide multinational IT solutions for all kinds of software.
              </h3>
              <p>
                We're continually looking for new ways to give tailored tactics
                to each of our customers. Our team will provide the most
                appropriate IT solutions that are at the cutting edge of the
                industry for you. We pride ourselves on being one of the most
                technologically advanced IT service providers in the world,
                which is why we continue to update and serve. We offer IT
                solutions such as Web development, custom ERP development, CRM
                development, and many others that enable us to provide
                innovative and high-quality services to our clients.
              </p>
              <Link to="/services">
                <button className="btn-pri btn-pri-shadow">
                  Our Services <BsChevronDoubleRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
