import whychooseus from "../../Images/wcuimage.png";
import { useState } from "react";
import ContactForm from "../Contact/ContactForm";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { BsXLg } from "react-icons/bs";

const WhyChooseUs = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="whychooseus-section mb-5">
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-16 col-sm-12 col-xs-12">
              <h6 className="small-heading">Why Choose Us</h6>
              <h1 className="big-heading">We love and know what we do!</h1>
              <p>
                <strong>Flexible prices</strong>
                <br />
                We consistently prioritize our clients' budgets. As a result, we
                offer the most reasonable price. <br /><br />
                <strong>Simple solutions to complex queries</strong>
                <br />
                Our team is known for delivering cutting-edge solutions for
                every assignment.
                <br /><br />
                <strong>Leading experts</strong>
                <br />
                We have a lot of techies on staff who have a lot of experience
                in the software development and digital marketing sectors.
                <br /><br />
                <strong>High-quality standards</strong>
                <br />
                Quality is key to us, and we never compromise on it. Our team
                ensures that our services are of the highest quality.
                <br />
              </p>
              <button className="btn-pri my-3" onClick={() => setModal(true)}>
                Request a Call Back
              </button>
              <PureModal
                isOpen={modal}
                closeButton={<BsXLg />}
                closeButtonPosition="top-right"
                onClose={() => {
                  setModal(false);
                  return true;
                }}
              >
                <ContactForm />
              </PureModal>
            </div>
            <div className="col-lg-6 col-md-16 col-sm-12 col-xs-12">
              <img src={whychooseus} alt="whychooseimage" class="wcu-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
