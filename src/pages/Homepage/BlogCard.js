import {Link} from "react-router-dom";
import {BsChevronDoubleRight} from "react-icons/bs";

const BlogCard = ({poster, authorImg, authorName, title, url}) => {
    return (
        <div className="blogcard">
            <img src={poster} alt="blog-poster" className="blog-poster" />
            <div>
                <div className="d-flex align-items-center mb-3">
                    <img src={authorImg} alt="author-img" className="me-3 authorimg" />
                    <h6>{authorName}</h6>
                </div>
                <h4 className="mb-3">{title}</h4>
                <Link to={url}>
                    <button className="btn-pri">Read More <BsChevronDoubleRight /></button>
                </Link>
            </div>
        </div>
    );
};
export default BlogCard;