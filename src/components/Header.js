// import logolight from "../Images/logolight.png";
// import logolight from "../Images/transaprent-logo-1.png";
import logolight from "../Images/LOGO2.jpg";
import logolights from "../Images/LOGO.png";
import { Link } from "react-router-dom";
import "../styles/Button.scss";
import "../styles/Navbar.scss";
import { BsTelephone, BsXLg } from "react-icons/bs";
import { FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import SentMessage from "../pages/Contact/SentMessage";
import ContactForm from "../pages/Contact/ContactForm";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const Header = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header className={sticky ? "sticky" : " "}>
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

      <nav className="navbar navbar-expand-lg">
        <Link to="/">
          <img
            src={logolights}
            alt="logo"
            className="logoimg ms-lg-5"
            width="200"
          />
        </Link>
        <ul className={`navbar-nav ${isOpen ? "mopen" : "close"}`}>
          <li className="nav-item">
            <a
              href="/"
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#about-us"
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-sm-block d-lg-none" to="/services" id="servicesMenu">
              Services <FaAngleDown />
            </Link>
            <a className="nav-link d-lg-block d-custom-none" href="/services" id="servicesMenu">
              Services <FaAngleDown />
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesMenu">
              <li>
                <a
                  className="dropdown-item"
                  href="/web-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/erp-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ERP/CRM Development
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/mobile-app-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/devops"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/graphic-designing"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Graphic Designing
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/digital-marketing"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
        <div className="d-flex justify-content-between align-items-center">
          <a className="phone-link" href="tel:+61 498 541 273">
            <h6 className="mb-0 nav-link contact">
              <BsTelephone className="me-1" />
              +61 498 541 273
            </h6>
          </a>
          <button
            className="btn-pri btn-pri-shadow me-5 call-bak-btn"
            onClick={() => setModal(true)}
          >
            Request a Call Back
          </button>
          <FaPhoneAlt onClick={() => setModal(true)} className="phn-call-back-btn" />
          <button
            className={`mb-menu ${isOpen ? "mopen" : "close"}`}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
