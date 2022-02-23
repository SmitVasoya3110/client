import { BsChevronDoubleRight } from "react-icons/bs";

const BuildBusiness = () => {
  return (
    <section className="buildbusiness-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <h1 className="big-heading text-light">Ready to GROW? Let's make it happen.</h1>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              totam, ipsam assumenda velit consectetur eaque modi sapiente quo
              non dolore minus ea culpa! Dicta corporis cupiditate sed
              accusantium, rerum omnis! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Et, rerum! Exercitationem molestias aspernatur
              eveniet veritatis nulla, officiis, quidem animi corrupti
              architecto minima magnam praesentium nam natus fugiat esse iusto.
              Optio?
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
            <button className="btn-white-border">
              Contact Us <BsChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildBusiness;
