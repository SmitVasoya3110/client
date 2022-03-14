import blogimg from "../../Images/mid-section-1.png";
import { Link } from "react-router-dom";

const BlogsCard = ({ title, description, link }) => {
  return (
    <div className="blogs-card">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={blogimg} alt="blog-image" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h1>{title}</h1>
          <p>{description.slice(0, 300)}...</p>
          <Link to={link}>
            <button className="btn-pri">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
