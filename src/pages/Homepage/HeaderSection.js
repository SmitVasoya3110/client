import "../../styles/Home.scss";
import { BsChevronDoubleRight } from "react-icons/bs";
import headerimg from "../../Images/HOME-BANNER.png";
// import headerimg from "../../Images/headerbgalt.jpeg";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <section className="title-header">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
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
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 position-relative">
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
