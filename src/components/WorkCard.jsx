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
    seeWorkHandler,
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
    backgroundSize: 'cover',
  };

  const styleHover = {
    backgroundImage: (imageHover === '') ? `url(${workBgHover})` : `url(${imageHover})`,
    backgroundSize: 'cover',
  };

  return (
    <div id={id} className="WorkCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={isHover ? styleHover : style}>
      <h4>{name}</h4>
      <p>{desc}</p>
      <ul className="topic">
        {topics.map((tool) => (
          <li className="topicEl" key={tool}>{tool}</li>
        ))}
      </ul>
      <button id={id} className="orangeBtn" type="button" onClick={seeWorkHandler}>See Project</button>
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
  seeWorkHandler: PropTypes.func.isRequired,
};

export default WorkCard;
