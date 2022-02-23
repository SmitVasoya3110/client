import "../../styles/Home.scss";

const WhyLikeUsSection = () => {
  const servicesData = [
    {
      img: "assets/Images/service1.png",
      name: "Business Strategy & Market Research",
      category: "Improve Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat quisquam, placeat doloremque voluptatibus optio.",
    },
    {
      img: "assets/Images/service2.png",
      name: "SEO, PPC & Social Media Solution",
      category: "SEO Optimazation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat quisquam, placeat doloremque voluptatibus optio.",
    },
    {
      img: "assets/Images/service3.png",
      name: "Web Design And Development",
      category: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat quisquam, placeat doloremque voluptatibus optio.",
    },
  ];

  return (
    <section className="whylikeus-section my-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h6 className="small-heading">Why Like Us</h6>
              <h1 className="big-heading">
                Success Your Business With
                <br />
                Establish Agency
              </h1>
            </div>
            <div className="row">
              {servicesData.map((sd) => (
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5">
                  <div className="service-card px-3">
                    <div className="sfrist-row d-flex mb-4">
                      <img src={sd.img} alt="services-img" className="me-3" />
                      <div>
                        <h3>{sd.name}</h3>
                        <h5 className="service-cat">{sd.category}</h5>
                      </div>
                    </div>
                    <hr />
                    <p>{sd.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLikeUsSection;
