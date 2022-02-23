import { BsCheckCircleFill } from "react-icons/bs";

const SentMessage = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="form-bg">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 p-5 text-center my-5">
              <h1 className="big-heading text-success"><BsCheckCircleFill /></h1>  
              <h1>
                Your Message has successfully sent. We'll get back you shortly!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
