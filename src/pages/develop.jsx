import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from '../redux/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';

const development = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.projects);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  const view = (
    <div className="test1">
      {projectsList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          desc={project.desc}
          topics={project.topics}
          image={project.image}
          seeWorkHandler={() => {}}
        />
      ))}
    </div>
  );

  return view;
};

export default development;
