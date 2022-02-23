import { AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { FiAward, FiHeart } from "react-icons/fi";
import { BsChevronDoubleRight } from "react-icons/bs";

const StatisticsSection = () => {
  return (
    <section className="statistics-section mb-5 pt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-6 mt-3">
              <div className="stats-card text-center" data-aos="fade-up" data-aos-delay="100">
                <span className="stats-icon" style={{backgroundColor:'#00c8b3'}}>
                  <AiOutlineProject />
                </span>
                <h5>2500+</h5>
                <p>Projects</p>
              </div>
              <div className="stats-card text-center" data-aos="fade-up" data-aos-delay="300">
                <span className="stats-icon" style={{backgroundColor:'#ff9b0d'}}>
                  <FiAward />
                </span>
                <h5>543</h5>
                <p>Win Awards</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6 mt-5">
              <div className="stats-card text-center" data-aos="fade-up" data-aos-delay="500">
                <span className="stats-icon" style={{backgroundColor:'#3f02a8'}}>
                  <FiHeart />
                </span>
                <h5>5470+</h5>
                <p>Statisfied Clients</p>
              </div>
              <div className="stats-card text-center" data-aos="fade-up" data-aos-delay="700">
                <span className="stats-icon" style={{backgroundColor:'#ff57a4'}}>
                  <AiOutlineUser />
                </span>
                <h5>1360+</h5>
                <p>Team Members</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h6 className="small-heading">Statistics</h6>
                <h1 className="big-heading">Let's See Our Business<br />Statistics</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis molestias consectetur minima! Eveniet cupiditate sed, quod voluptates, blanditiis dignissimos illum facere, fugiat sit itaque dolor et libero voluptatibus provident quidem.</p>
                <button className="btn-pri">Read More <BsChevronDoubleRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
