import PropTypes from 'prop-types';
import '../styles/SocialLinks.scss';

const SocialLinks = (props) => {
  const { color, section } = props;

  const component = (
    <ul style={{ color }} className={`social-links ${section}-icons`}>
      <li className="sLink">GH</li>
      <li className="sLink">LI</li>
      <li className="sLink">TW</li>
      <li className="sLink">MD</li>
    </ul>
  );

  return component;
};

export default SocialLinks;

SocialLinks.propTypes = {
  color: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
