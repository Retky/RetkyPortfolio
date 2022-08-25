import React from 'react';
import PropTypes from 'prop-types';
import './WorkDetail.scss';
import workPreview from '../img/workPreview.png';

const WorkDetail = (props) => {
  const {
    showDetail,
    setShowDetail,
    work,
  } = props;

  const showStyle = { display: showDetail ? 'block' : 'none' };

  return (
    <div className="blurBg" style={showStyle}>
      <div className="WorkDetail">
        <div role="button" tabIndex={0} className="WorkDetail__close" onClick={() => setShowDetail(false)} onKeyDown={() => setShowDetail(false)}> X </div>
        <h3>{work.name}</h3>
        <ul>
          {work.topics.map((topic) => (<li key={topic}>{topic}</li>))}
        </ul>
        <div className="WorkDetailInfo">
          <div className="WorkFullImageDiv">
            <img src={work.imageFull === '' ? workPreview : work.imageFull} alt={work.name} />
          </div>
          <div className="WorkDetailDescrip">
            {work.description}
            <div className="WorkDetailLinks">
              <button className="orangeBtn" type="button" onClick={() => window.open(work.homepage, '_blank')}> See Live </button>
              <button className="orangeBtn" type="button" onClick={() => window.open(work.live, '_blank')}> See Source </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkDetail.propTypes = {
  showDetail: PropTypes.bool.isRequired,
  setShowDetail: PropTypes.func.isRequired,
  work: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageFull: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkDetail;
