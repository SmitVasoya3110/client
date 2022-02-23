import footerimg from "../Images/bottom-section-1.png";
import logodark from "../Images/transparent-logo.png";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaBehance,
} from "react-icons/fa";
import { BsTelephone, BsFillPinMapFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pb-4">
      <div className="container-fluid footer-section">
        <div className="container position-relative">
          <img
            src={footerimg}
            alt="footerimg"
            className="footer-img imgbounce"
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Link to="/">
                <img className="mb-4" src={logodark} alt="logo" width="200" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              {/* social media links */}
              <div className="d-flex mb-4 d-none">
                <FaFacebookF className="footer-sm h5" />
                <FaTwitter className="footer-sm h5" />
                <FaGooglePlusG className="footer-sm h5" />
                <FaBehance className="footer-sm h5" />
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-4">
              <div>
                <h4 className="mb-4">Our Contact</h4>
                <h5>
                  <BsFillPinMapFill className="footer-sm h5" />
                  Address
                </h5>
                <h6 className="mb-4">
                  Bondi Beach
                  <br />
                  Sydney, Australia
                </h6>
                <h5>
                  <BsTelephone className="footer-sm h5" />
                  Contact
                </h5>
                <a href="tel:+61 498 541 273">
                  <h6 className="mb-3 text-dark">+61 498 541 273</h6>
                </a>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                Copy@2022 <span className="fcp-brand">DigiSurf</span>. All Right
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
