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
      <a href="https://github.com/Retky" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/retky/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/retkyFox" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://medium.com/@retky" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faMedium} />
      </a>
    </ul>
  );

  return component;
};

export default SocialLinks;

SocialLinks.propTypes = {
  section: PropTypes.string.isRequired,
};
