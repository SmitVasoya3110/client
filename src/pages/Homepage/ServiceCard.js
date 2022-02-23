import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceCard = ({ img, name, description, link }) => {
  return (
    <div className="service-tab mb-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="sc-img text-center mb-3">
            <img src={img} alt="service-img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h4 className="text-center mb-3">{name}</h4>
          <p className="mb-3">{description}</p>
          <Link to={link}>
            <button className="btn-pri btn-pri-shadow mt-3">
              Read More <HiOutlineArrowNarrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
