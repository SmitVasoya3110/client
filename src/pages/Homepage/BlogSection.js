import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { blogData } from "./blogData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const bsoptions = {
    margin: 20,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  };

  return (
    <section className="blog-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <h6 className="small-heading">Our Blog</h6>
              <h1 className="big-heading">
                Reads Our Latest
                <br />
                News and Blog
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                eos adipisci dicta unde nisi repellendus cumque possimus, ipsam
                nobis! Impedit magnam modi omnis delectus aut nesciunt sit ea
                eveniet!
              </p>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
              <div className="blog-carousel">
                <OwlCarousel className="owl-theme" loop nav {...bsoptions}>
                  {blogData.map((bd, index) => (
                    <BlogCard
                      key={index}
                      poster={bd.poster}
                      authorImg={bd.authorImg}
                      authorName={bd.authorName}
                      title={bd.title}
                      url={bd.url}
                    />
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
