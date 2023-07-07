import PropTypes from 'prop-types';
import projectPreview from '../img/projectPreview.png';
import SrcIco from '../img/SrcIco.png';
import LiveIco from '../img/LiveIco.png';
import '../styles/DetailsPop.scss';

const ProjectDetails = (props) => {
  const {
    showDetail,
    setShowDetail,
    project,
  } = props;

  const showStyle = { display: showDetail ? 'flex' : 'none' };

  const view = (
    <div className="blurBg" style={showStyle}>
      <div className="workDetail">
        <div role="button" tabIndex={0} className="workDetailClose" onClick={() => setShowDetail(false)} onKeyDown={() => setShowDetail(false)}> X </div>
        <h3>{project.name}</h3>
        <ul className="topic">
          {project.topics.map((topic) => (<li className="topicDetail" key={topic}>{topic}</li>))}
        </ul>
        <div className="workDetailInfo">
          <div className="workFullImageDiv">
            <img src={project.imageFull === '' ? projectPreview : project.imageFull} alt={project.name} />
          </div>
          <div className="workDetailDescrip">
            {project.description}
            <div className="workDetailLinks">
              <button className="orange-btn" type="button" onClick={() => window.open(project.homepage, '_blank')}>
                {'See Live '}
                <img src={LiveIco} alt="Live" />
              </button>
              <button className="orange-btn" type="button" onClick={() => window.open(project.live, '_blank')}>
                {'See Source '}
                <img src={SrcIco} alt="Source" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return view;
};

ProjectDetails.propTypes = {
  showDetail: PropTypes.bool.isRequired,
  setShowDetail: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageFull: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectDetails;
