import React from 'react';
import PropTypes from 'prop-types';
import './WorkDetail.scss';
import workPreview from '../img/workPreview.png';
import SrcIco from '../img/SrcIco.png';
import LiveIco from '../img/LiveIco.png';

const WorkDetail = (props) => {
  const {
    showDetail,
    setShowDetail,
    work,
  } = props;

  const showStyle = { display: showDetail ? 'block' : 'none' };

  return (
    <div className="blurBg" style={showStyle}>
      <div className="workDetail">
        <div role="button" tabIndex={0} className="workDetailClose" onClick={() => setShowDetail(false)} onKeyDown={() => setShowDetail(false)}> X </div>
        <h3>{work.name}</h3>
        <ul className="topic">
          {work.topics.map((topic) => (<li className="topicDetail" key={topic}>{topic}</li>))}
        </ul>
        <div className="workDetailInfo">
          <div className="workFullImageDiv">
            <img src={work.imageFull === '' ? workPreview : work.imageFull} alt={work.name} />
          </div>
          <div className="workDetailDescrip">
            {work.description}
            <div className="workDetailLinks">
              <button className="orangeBtn" type="button" onClick={() => window.open(work.homepage, '_blank')}>
                {'See Live '}
                <img src={LiveIco} alt="Live" />
              </button>
              <button className="orangeBtn" type="button" onClick={() => window.open(work.live, '_blank')}>
                {'See Source '}
                <img src={SrcIco} alt="Source" />
              </button>
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
