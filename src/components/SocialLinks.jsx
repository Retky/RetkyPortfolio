import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faTwitter, faMedium,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import '../styles/SocialLinks.scss';

const SocialLinks = (props) => {
  const { section } = props;

  const component = (
    <ul className={`social-links ${section}-icons`}>
      <li>
        <FontAwesomeIcon icon={faGithub} />
      </li>
      <li>
        <FontAwesomeIcon icon={faLinkedin} />
      </li>
      <li>
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <li>
        <FontAwesomeIcon icon={faMedium} />
      </li>
    </ul>
  );

  return component;
};

export default SocialLinks;

SocialLinks.propTypes = {
  section: PropTypes.string.isRequired,
};
