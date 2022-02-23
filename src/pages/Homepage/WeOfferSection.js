import cta2 from "../../Images/cta2.png";
import greyblobbg from "../../Images/greyblobbg.png";
import "../../styles/Home.scss";
import {FaLaptopCode} from "react-icons/fa";
import {RiLeafLine} from "react-icons/ri"

const WeOfferSection = () => {
  return (
    <section className="weoffer-section my-5">
        <img src={greyblobbg} alt="greyblob" className="wosec-img" />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-aos="fade-right">
              <h6 className="small-heading">What We Do</h6>
              <h1 className="big-heading mb-4">
                We Offer Best Solution
                <br />
                For Your Business
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                sunt blanditiis, unde recusandae maiores minima est dolore id ut
                modi in natus facere quo voluptatum, eum cupiditate beatae
                repellat amet?
              </p>
              <div className="d-flex mb-3">
                <RiLeafLine className="me-3 wo-icon" />
                <div className="w-75">
                  <h6>Manage Your Project</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae sunt blanditiis. Mde recusandae maiores minima est dolore id ut modi
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <FaLaptopCode className="me-3 wo-icon" />
                <div className="w-75">
                  <h6>Manage Your Project</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae sunt blanditiis. Mde recusandae maiores minima est dolore id ut modi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <img src={cta2} alt="aboutus-img" className="mb-5 block-img imgbounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeOfferSection;
