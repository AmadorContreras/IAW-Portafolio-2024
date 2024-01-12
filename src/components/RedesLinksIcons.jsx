import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const RedesLinkIcons = () => {
  return (
    <>
      <div className="social-media">
        <h1>Sigueme</h1>
        <Link to='/'>
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </>
  );
};

export default RedesLinkIcons;
