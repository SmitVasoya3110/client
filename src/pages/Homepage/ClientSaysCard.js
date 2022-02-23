const ClientSaysCard = ({ name, post, image, message }) => {
  return (
    <div className="client-review-card">
      <div className="client-image">
        <img src={image} alt="client-img" />
      </div>
      <div className="client-message text-center">
        <p>{message}</p>
        <h4 className="client-name">{name}</h4>
        <h6 className="client-post">{post}</h6>
      </div>
    </div>
  );
};

export default ClientSaysCard;
