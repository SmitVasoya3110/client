import "../../styles/Home.scss";
import { BsChevronDoubleRight } from "react-icons/bs";
import headerimg from "../../Images/HOME-BANNER.png";
// import headerimg from "../../Images/headerbgalt.jpeg";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <section className="title-header">
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="header-text">
                {/* <h1 className="text-light">Integrating technology with strategies</h1> */}
                <h1 className="text-uppercase gradient-head">
                  <strong>
                    Integrating technology
                    <br />
                    with strategies
                  </strong>
                </h1>
                <p className="">We design a unique brand identity!</p>
                <a href="#our-services">
                  <button className="btn-pri me-3 head-btn">
                    Our Services <BsChevronDoubleRight />
                  </button>
                </a>
                <Link to="/contact">
                  <button className="btn-pri head-btn">
                    Contact Us <BsChevronDoubleRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 position-relative">
              <img
                src={headerimg}
                alt="header-img"
                className=" header-img imgbounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
