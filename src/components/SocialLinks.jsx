import PropTypes from 'prop-types';
import '../styles/SocialLinks.scss';

const SocialLinks = (props) => {
  const { section } = props;

  const component = (
    <ul className={`social-links ${section}-icons`}>
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
  section: PropTypes.string.isRequired,
};
