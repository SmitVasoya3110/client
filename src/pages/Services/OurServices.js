import ServicesCard from "./ServicesCard";
import { FaFacebookMessenger, FaAppStore } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";
import { SiAdobeillustrator, SiAzuredevops } from "react-icons/si";

const OurServices = () => {
  return (
    <section className="ourservices-section mb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h1 className="big-heading">Services DigiSurf Offers</h1>
              <p>
                We got our hands on the latest technologies, tools, and tactics
                to grow your business widely.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-mg-12 col-sm-12 col-xs-12 sc-container">
              <ServicesCard
                icon={<GrReactjs className="sc-icon" />}
                title="Web Developement"
                description="Our team is fully knowledgeable and skilled in web development, employing the most appropriate technologies such as REACT, REDUX, NODEJS, Python, and many more."
                link="/web-development"
              />
              <ServicesCard
                icon={<FiDatabase className="sc-icon" />}
                title="ERP/CRM Development"
                description="Our skilled staff creates tailored ERP and CRM systems to match your specific business needs. Our ERP enables you to successfully plan, integrate, perform, and automate business activities."
                link="/erp-development"
              />
              <ServicesCard
                icon={<FaAppStore className="sc-icon" />}
                title="Mobile App Development"
                description="Our team of mobile app developers is innovative and knowledgeable to meet your demands as well as your business requirements."
                link="/mobile-app-development"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-mg-12 col-sm-12 col-xs-12 sc-container">
              <ServicesCard
                icon={<SiAzuredevops className="sc-icon" />}
                title="DevOps"
                description="Digisurf will keep your business, development, and operations teams on the same page regarding the best method to enhance corporate apps, increase IT security."
                link="/devops"
              />
              <ServicesCard
                icon={<SiAdobeillustrator className="sc-icon" />}
                title="Graphic Designing"
                description="We provide unique and high-quality UI/UX, Logo Design, and Banner/Poster layouts that drive online traffic, attract visitors, persuade consumers, etc."
                link="/graphic-designing"
              />
              <ServicesCard
                icon={<FaFacebookMessenger className="sc-icon" />}
                title="Digital Marketing"
                description="We, at Digisurf, deliver end-to-end marketing solutions for all types of businesses. All services including SEO, SEM, PPC, SMO, content marketing, and social media."
                link="/digital-marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
