import "../../styles/BlogsList.scss";
import BlogsContainer from "./BlogsContainer";
import BlogsHeader from "./BlogsHeader";

const BlogsList = () => {
    return (
        <div>
           <BlogsHeader />
           <BlogsContainer />
        </div>
    );
};

export default BlogsList;