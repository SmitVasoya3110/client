import BlogsCard from "./BlogsCard";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const BlogsContainer = () => {
  
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 5;
    const pageVisited = pageNumber * blogsPerPage;

  return (
    <section className="blogs-container mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <BlogsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsContainer;
