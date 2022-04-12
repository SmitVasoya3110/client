import progressblobbg from "../../Images/progressblobbg.png";
import progressimg from "../../Images/progressimg.png";
import "../../styles/Home.scss";
import { Line } from "rc-progress";

const ProgressSection = () => {
  return (
    <section className="skills-section mb-5">
      <img src={progressblobbg} alt="blog image" className="s-img" />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img src={progressimg} alt="skills-img" className="skills-img imgbounce" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-4">
              <h6 className="small-heading">Our Skills</h6>
              <h1 className="big-heading">
                Know Everything About
                <br />
                Professional Skills
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                exercitationem sint quisquam debitis voluptatem reiciendis nemo
                necessitatibus repellendus consectetur ab odio, suscipit aperiam
                libero hic ea laudantium sunt. Illum, atque!
              </p>
              <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="d-flex justify-content-between" style={{width:'95%'}}>
                  <h5>Business Strategy</h5>
                  <span className="h5">95%</span>
                </div>
                <Line
                  percent={95}
                  strokeColor="#3f02a8"
                  strokeLinecap="square"
                />
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex justify-content-between" style={{width:'87%'}}>
                  <h5>SEO Optimization</h5>
                  <span className="h5">87%</span>
                </div>
                <Line
                  percent={87}
                  strokeColor="#ff57a4"
                  strokeLinecap="square"
                />
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay="600">
                <div className="d-flex justify-content-between" style={{width:'63%'}}>
                  <h5>Social Media Marketing</h5>
                  <span className="h5">63%</span>
                </div>
                <Line
                  percent={63}
                  strokeColor="#00c8b3"
                  strokeLinecap="square"
                />
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay="900">
                <div className="d-flex justify-content-between" style={{width:'55%'}}>
                  <h5>Web Devel</h5>
                  <span className="h5">55%</span>
                </div>
                <Line
                  percent={55}
                  strokeColor="#ff9b0d"
                  strokeLinecap="square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
