import OurTeamCard from "./OurTeamCard";
import team1 from "../../Images/team1.jpeg";
import team2 from "../../Images/team2.jpeg";
import team3 from "../../Images/team3.jpeg";
import team4 from "../../Images/team4.jpeg";

const OurTeamSection = () => {
  return (
    <section className="ourteam-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h6 className="small-heading">Our Team</h6>
              <h1 className="big-heading mb-4">
                Meet Our Exclusive
                <br />
                Team Member
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 xol-sm-12" data-aos="fade-up" data-aos-delay="100">
              <OurTeamCard photo={team1} memberName="Ricardo Torres" memberDesg="Web Designer" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 xol-sm-12" data-aos="fade-up" data-aos-delay="300">
              <OurTeamCard photo={team2} memberName="Paul Sanchez" memberDesg="Web Developer" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 xol-sm-12" data-aos="fade-up" data-aos-delay="600">
              <OurTeamCard photo={team3} memberName="Herbert Waters" memberDesg="App Developer" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 xol-sm-12" data-aos="fade-up" data-aos-delay="900">
              <OurTeamCard photo={team4} memberName="Jeremy Harrington" memberDesg="UI/UX Designer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
