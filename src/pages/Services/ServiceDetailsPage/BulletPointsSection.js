const BulletPointsSection = ({ whyus, heading }) => {
  return (
    <section className="bullet-section">
      <div className="container-fluuid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                We offer the best <strong>{heading}</strong>, allowing our clients
                to take advantage of a variety of advantages, including:
              </h4>
              <ul>
                {whyus && whyus.map((wh, index) => (
                  <li key={index}>{wh}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletPointsSection;
