import React, { useState } from 'react';
import PropTypes from 'prop-types';

import workBg from '../img/workBg.png';
import workBgHover from '../img/workBgHover.png';

const WorkCard = (props) => {
  const {
    id,
    name,
    desc,
    topics,
    image,
    imageHover,
  } = props;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    backgroundImage: (image === '') ? `url(${workBg})` : `url(${image})`,
  };

  const styleHover = {
    backgroundImage: (imageHover === '') ? `url(${workBgHover})` : `url(${imageHover})`,
  };

  return (
    <div id={id} className="WorkCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={isHover ? styleHover : style}>
      <h4>{name}</h4>
      <p>{desc}</p>
      <ul>
        {topics.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <button id={id} className="orangeBtn" type="button">See Project</button>
    </div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  imageHover: PropTypes.string.isRequired,
};

export default WorkCard;
