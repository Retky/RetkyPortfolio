import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from '../redux/projects';

const development = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.projects);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  const view = (
    <div className="test1">
      {projectsList.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );

  return view;
};

export default development;
