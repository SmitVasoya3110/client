import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaBehance,
} from "react-icons/fa";

const OurTeamCard = ({photo, memberName, memberDesg}) => {
    return (
        <div className="ourteam-card">
            <div className="team-memb-img">
                
                 <img src={photo} alt="member-img" />
            </div>
            <div className="team-memb-info text-center">
                <div className="member-sl">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGooglePlusG />
                    <FaBehance />
                </div>
                <h1>{memberName}</h1>
                <br />
                <p className="memb-post">{memberDesg}</p>
            </div>
        </div>    
    );
};

export default OurTeamCard;