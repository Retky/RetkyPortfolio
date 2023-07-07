import { useState } from 'react';
import Development from './develop';
import '../styles/Projects.scss';

const Projects = () => {
  const [category, setCategory] = useState('development');

  const handleClickCategory = (e) => {
    setCategory(e.target.value);
  };

  const view = (
    <div id="projects" className="projects">
      <div className="projects-content">
        <div className="menu">
          <button className={`menu-btn ${category === 'development' ? 'active' : ''}`} type="button" value="development" onClick={handleClickCategory}>Development</button>
          {/* <button className={`menu-btn ${category === 'videoGames' ? 'active' : ''}`}
          type="button" value="videoGames" onClick={handleClickCategory}>Video Games</button> */}
          {/* <button className={`menu-btn ${category === '3d' ? 'active' : ''}`}
          type="button" value="3d" onClick={handleClickCategory}>3D Design</button> */}
        </div>
        <div className="content">
          {category === 'development' && <Development />}
        </div>
      </div>
    </div>
  );

  return view;
};

export default Projects;
