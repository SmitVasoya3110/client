import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import "./socialfollow.scss";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/digisurf-au"
        className="youtube social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/digisurf.au"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/DigisurfA" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/digisurf.au"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

    </div>
  );
}
