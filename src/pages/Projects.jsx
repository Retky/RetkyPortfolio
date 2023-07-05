import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsList } from '../redux/portfolio';
import '../styles/Projects.scss';

const Projects = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.portfolio);

  useEffect(() => {
    dispatch(fetchProjectsList());
  }, [dispatch]);

  console.log(projectsList);

  const view = (
    <div id="projects" className="projects">
      <div className="projects-content">
        <div className="test">
          {projectsList.map((project) => (
            <div className="project-card" key={project}>
              <h3>{project}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return view;
};

export default Projects;
