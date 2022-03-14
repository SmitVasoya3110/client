import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServicesCard = ({ icon, title, description, link }) => {
  return (
    <Tilt
      perspective={1000}
      className="service-card text-center parallax-effect"
    >
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={link}>
        <button className="btn-pri-shadow">
          <HiOutlineArrowNarrowRight />
        </button>
      </Link>
    </Tilt>
  );
};

export default ServicesCard;
