import { BsChevronDoubleRight } from "react-icons/bs";
import { useState } from "react";
import SentMessage from "../Contact/SentMessage";
import ContactForm from "../Contact/ContactForm";
import PureModal from "react-pure-modal";
import { BsXLg } from "react-icons/bs";

const BuildBusiness = () => {
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(false);

  return (
    <section className="buildbusiness-section">
      <PureModal
        isOpen={modal}
        closeButton={<BsXLg />}
        closeButtonPosition="top-right"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        {msg ? <SentMessage /> : <ContactForm setMsg={setMsg} />}
      </PureModal>
      <div className="container-fluid">
        <div className="row bb-row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 newlatter">
            <h1 className="text-light">
              Ready to GROW? Let's make it happen.
            </h1>
            <h6 className="text-light">
              <em>
                We will deliver all the solutions with no hassle and any hidden
                charges.
              </em>
            </h6>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
            <button className="btn-pri btn-white-border" onClick={() => setModal(true)}>
              Contact Us <BsChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildBusiness;
