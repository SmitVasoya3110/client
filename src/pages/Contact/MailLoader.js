import mailloader from "../../Images/mailloader.gif";
import "../../styles/Home.scss";

const MailLoader = () => {
  return (
      <div className="container-fluid">
      <div className="container">
        <div className="form-bg">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 p-5 text-center">
            <img src={mailloader} alt="mailloader" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailLoader;