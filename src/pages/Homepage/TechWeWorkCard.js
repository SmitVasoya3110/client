const TechWeWorkCard = ({icon, title, description}) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <span>{icon}</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h4 className="text-center mb-3">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TechWeWorkCard;