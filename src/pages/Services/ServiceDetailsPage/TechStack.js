const TechStack = ({ techStack }) => {
  return (
    <section className="techstack-section mt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center big-heading">Our Tech-Stack</h1>
            </div>
          </div>
        </div>
      </div>

      {techStack.map((ts, index) => (
        <div key={index} className="container-fuild tech-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                <img src={ts.img} alt="techstackimage" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1>{ts.title}</h1>
                <p>{ts.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
