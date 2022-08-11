import React from 'react';
import PropTypes from 'prop-types';

import workBg from '../img/workBg.png';

const WorkCard = (props) => {
  const {
    id,
    name,
    description,
    topics,
    preview,
  } = props;

  const style = {
    backgroundImage: (preview === '') ? `url(${workBg})` : `url(${preview})`,
  };

  return (
    <div id={id} className="WorkCard" style={style}>
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {topics.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <button className="orangeBtn" type="button">See Project</button>
    </div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  preview: PropTypes.string.isRequired,
};

export default WorkCard;
