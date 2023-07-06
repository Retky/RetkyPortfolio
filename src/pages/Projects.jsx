import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from '../redux/projects';
import '../styles/Projects.scss';

const Projects = () => {
  const [category, setCategory] = useState('development');
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.projects);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  const handleClickCategory = (e) => {
    setCategory(e.target.value);
  };

  const section1 = (
    <div className="test1">
      {projectsList.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );

  const section2 = (
    <div className="test2">
      B
    </div>
  );

  const section3 = (
    <div className="test3">
      C
    </div>
  );

  const view = (
    <div id="projects" className="projects">
      <div className="projects-content">
        <div className="menu">
          <button type="button" value="development" onClick={handleClickCategory}>Development</button>
          <button type="button" value="videoGames" onClick={handleClickCategory}>Video Games</button>
          <button type="button" value="3d" onClick={handleClickCategory}>3D Design</button>
        </div>
        <div className="content">
          {category === 'development' && section1}
          {category === 'videoGames' && section2}
          {category === '3d' && section3}
        </div>
      </div>
    </div>
  );

  return view;
};

export default Projects;
