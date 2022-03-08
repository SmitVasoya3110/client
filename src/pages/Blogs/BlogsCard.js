import blogimg from "../../Images/mid-section-1.png";

const BlogsCard = () => {
  return (
    <div className="blogs-card">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={blogimg} alt="blog-image" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h1>What are personalized websites and why you should have one?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            inventore est, rerum, voluptatem ullam quas maxime error perferendis
            expedita unde quia incidunt! Architecto quod doloremque tempora?
            Porro maxime beatae quod?
          </p>
          <button className="btn-pri">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
