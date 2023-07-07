import { useState } from 'react';
import PropTypes from 'prop-types';
import projectBg from '../img/projectBg.png';
import projectBgHover from '../img/projectBgHover.png';
import '../styles/Card.scss';

const ProjectCard = (props) => {
  const {
    id,
    name,
    desc,
    topics,
    image,
    seeProjectHandler,
  } = props;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    backgroundImage: (image === '') ? `url(${projectBg})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${image})`,
    backgroundSize: 'cover',
  };
  const styleHover = {
    backgroundImage: (image === '') ? `url(${projectBgHover})` : `url(${image})`,
    backgroundSize: 'cover',
  };
  const view = (
    <div id={id} className="WorkCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={isHover ? styleHover : style}>
      <h4>{name}</h4>
      <p>{desc}</p>
      <ul className="topic">
        {topics.map((tool) => (
          <li className="topicEl" key={tool}>{tool}</li>
        ))}
      </ul>
      <button id={id} className="orange-btn wide-btn" type="button" onClick={seeProjectHandler}>See Project</button>
    </div>
  );

  return view;
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  seeProjectHandler: PropTypes.func.isRequired,
};

export default ProjectCard;
