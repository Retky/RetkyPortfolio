import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from '../redux/projects';
import '../styles/Projects.scss';

const Projects = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.projects);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  console.log(projectsList);

  const view = (
    <div id="projects" className="projects">
      <div className="projects-content">
        <div className="test">
          {projectsList.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return view;
};

export default Projects;
