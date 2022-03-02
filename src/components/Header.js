// import logolight from "../Images/logolight.png";
import { useEffect } from "react";
// import logolight from "../Images/transaprent-logo-1.png";
import logolight from "../Images/transparent-logo.png";
import { Link } from "react-router-dom";
import "../styles/Button.scss";
import "../styles/Navbar.scss";
import { BsTelephone, BsXLg } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import ContactForm from "../pages/Contact/ContactForm";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const Header = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

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
        <ContactForm />
      </PureModal>

      <nav className="navbar navbar-expand-lg">
        <Link to="/">
          <img
            src={logolight}
            alt="logo"
            className="logoimg ms-lg-5"
            width="200"
          />
        </Link>
        <ul className={`navbar-nav ${isOpen ? "mopen" : "close"}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="#about-us"
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" id="servicesMenu">
              Services <FaAngleDown />
            </Link>
            <ul className="dropdown-menu" aria-labelledby="servicesMenu">
              <li>
                <Link
                  className="dropdown-item"
                  to="/web-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/erp-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ERP/CRM Development
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/graphic-designing"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/digital-marketing"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/devops"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/mobile-app-development"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li> */}
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
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
        <div className="d-flex justify-content-between align-items-center">
          <a href="tel:+61 498 541 273">
            <h6 className="mb-0 nav-link contact">
              <BsTelephone className="me-1" />
              +61 498 541 273
            </h6>
          </a>
          <button
            className="btn-pri btn-pri-shadow me-5"
            onClick={() => setModal(true)}
          >
            Request a Call Back
          </button>
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
