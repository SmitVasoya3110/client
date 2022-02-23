import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import research from "../../../Images/research-and-development (1).png";
import design from "../../../Images/curve.png";
import development from "../../../Images/research-and-development (2).png";
import testing from "../../../Images/web-coding.png";
import deployment from "../../../Images/deployment.png";
import evaluation from "../../../Images/evaluation.png";
import maintenance from "../../../Images/maintenance.png";

const DevelopmentStages = () => {
  return (
    <section className="dev-stages-section mt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center big-heading">Our Development Process</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentArrowStyle={{
                    borderRight: "7px solid  #fff",
                  }}
                  date="Stage 1"
                >
                  <div className="d-flex">
                    <img src={research} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                        Kick-off Research
                      </h3>
                      <p>
                        Idea, Consultation, Research, Goal Definition, and
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Stage 2"
                >
                  <div className="d-flex">
                    <img src={design} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Design
                      </h3>
                      <p>
                      System Architecture Design, Wireframing, UI/UX Designing, and Prototyping
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Stage 3"
                >
                  <div className="d-flex">
                    <img src={development} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Development
                      </h3>
                      <p>
                      Functional Implementation, Software Coding and Optimization
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Stage 4"
                >
                  <div className="d-flex">
                    <img src={testing} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Testing
                      </h3>
                      <p>
                      Quality Assurance, Troubleshooting, and Testing
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Stage 5"
                >
                  <div className="d-flex">
                    <img src={deployment} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Deployment
                      </h3>
                      <p>
                      Launch. Beta Live. and Live
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Stage 6"
                >
                  <div className="d-flex">
                    <img src={evaluation} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Evaluation
                      </h3>
                      <p>
                      Performance Evaluation, and Analytics Implementation
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Stage 7"
                >
                  <div className="d-flex">
                    <img src={maintenance} alt="stageimage" className="me-3" />
                    <div>
                      <h3 className="vertical-timeline-element-title">
                      Maintenance
                      </h3>
                      <p>
                      Monitoring, Feedback, Analysis, and Complete Support
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
