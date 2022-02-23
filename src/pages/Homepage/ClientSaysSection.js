import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { reviewData } from "./reviewData";
import ClientSaysCard from "./ClientSaysCard";

const ClientSaysSection = () => {
  const options = {
    margin: 10,
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
        items: 2,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  };

  return (
    <section className="review-section py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h6 className="small-heading">Client Says</h6>
              <h1 className="big-heading">
                Know Everything About
                <br />
                Professional Skills
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="review-carousel">
                <OwlCarousel className="owl-theme" loop nav {...options}>
                  {reviewData.map((rd, index) => (
                    <ClientSaysCard
                      key={index}
                      name={rd.name}
                      post={rd.post}
                      image={rd.image}
                      message={rd.message}
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

export default ClientSaysSection;
