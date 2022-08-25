import React from 'react';
import PropTypes from 'prop-types';
import './WorkDetail.scss';

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
