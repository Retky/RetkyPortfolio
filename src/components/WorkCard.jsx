import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = (props) => {
  const {
    id,
    name,
    description,
    topics,
  } = props;

  return (
    <div id={id}>
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {topics.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <button type="button">See Project</button>
    </div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkCard;
