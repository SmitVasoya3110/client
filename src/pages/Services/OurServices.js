import ServicesCard from "./ServicesCard";
import { FaHandHoldingUsd } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="ourservices-section mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h1 className="big-heading">Services Digisurf Offers</h1>
              <p>
                We got our hands on the latest technologies, tools, and tactics
                to grow your business widely.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-mg-12 col-sm-12 col-xs-12 sc-container">
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="Web Developement"
                description="Our team is fully knowledgeable and skilled in web development, employing the most appropriate technologies such as REACT, REDUX, NODEJS, Python, and many more."
                link="/web-development"
              />
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="ERP/CRM Development"
                description="Our skilled staff creates tailored ERP and CRM systems to match your specific business needs. Our ERP enables you to successfully plan, integrate, perform, and automate business activities. Across all industry sectors, our CRM creation enhances business potency."
                link="/erp-development"
              />
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="Graphic Designing"
                description="We provide unique and high-quality UI/UX, Logo Design, and Banner/Poster layouts that drive online traffic, attract visitors, persuade consumers, and enhance click-through rates."
                link="/graphic-designing"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-mg-12 col-sm-12 col-xs-12 sc-container">
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="Digital Marketing"
                description="We, at Digisurf, deliver end-to-end marketing solutions for all types of businesses. Our services encompass all stages of IT solutions and business digital marketing, allowing your company to build a strong brand."
                link="/digital-marketing"
              />
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="DevOps"
                description="Digisurf will keep your business, development, and operations teams on the same page regarding the best method to enhance corporate apps, increase IT security, and maximize infrastructure resources as an established DevOps services provider."
                link="/devops"
              />
              <ServicesCard
                icon={<FaHandHoldingUsd className="sc-icon" />}
                title="Mobile App Development"
                description="Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor incididunt ut labore et"
                link="/mobile-app-development"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
