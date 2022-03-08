import { useState } from "react";
import ContactForm from "../../Contact/ContactForm";
import PureModal from "react-pure-modal";
import SentMessage from "../../Contact/SentMessage";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { BsXLg } from "react-icons/bs";

const ServiceHeader = ({ heading, headerContent, img, bgImg }) => {
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(false);

  return (
    <section className="service-header" style={{backgroundImage: `url(${bgImg})`}}>
      <PureModal
        isOpen={modal}
        closeButton={<BsXLg />}
        closeButtonPosition="top-right"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        {
          msg ? <SentMessage /> : <ContactForm setMsg={setMsg} />
        }
      </PureModal>

      <div className="container-fuild">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1 className="gradient-head">{heading}</h1>
              <p>{headerContent}</p>
              <button className="btn-pri mb-3" onClick={() => setModal(true)}>
                Request a Call Back
              </button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img className="sbimg" src={img} alt="serviceBannerImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
