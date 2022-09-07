import React from 'react';
import PropTypes from 'prop-types';

const MainWork = (props) => {
  const {
    id,
    name,
    description,
    topics,
    imageFull,
    seeWorkHandler,
  } = props;

  return (
    <div className="workMain">
      <div className="workMainImg">
        <img src={imageFull} alt={name} />
      </div>
      <div className="workMainInfo">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="topic">
          {topics.map((tool) => (
            <li className="topicEl" key={tool}>{tool}</li>
          ))}
        </ul>
        <button id={id} className="orangeBtn" type="button" onClick={seeWorkHandler}>See Project</button>
      </div>
    </div>
  );
};

MainWork.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageFull: PropTypes.string.isRequired,
  seeWorkHandler: PropTypes.func.isRequired,
};

export default MainWork;
