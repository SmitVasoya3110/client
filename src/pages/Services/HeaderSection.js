import servicebanner from "../../Images/service-banner.png"

const HeaderSection = ({ title }) => {
  return (
    <section className="header-section mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="heading-container">
                <h1 className="big-heading gradient-head">{title}</h1>
                <h2><em>We provide quality services for your business needs.</em></h2>
                <p>
                  We have an excellent and capable development team that
                  specializes in web development. Digisurf doesn't just develop
                  intuitive web development, we specialize in internet marketing
                  services too. We will help with accelerating your business
                  growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <img src={servicebanner} className="serbanner" alt="service-bannner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
