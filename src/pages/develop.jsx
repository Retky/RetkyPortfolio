import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from '../redux/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';

const development = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((store) => store.projects);
  const [showDetail, setShowDetail] = useState(false);
  const [projectD, setProjectD] = useState({
    id: 0,
    name: '',
    topics: [],
    imageFull: '',
    description: '',
    homepage: '',
    live: '',
  });

  const seeProjectHandler = (e) => {
    const indexId = projectsList.findIndex((work) => work.id === Number(e.target.id));
    setProjectD({
      id: projectsList[indexId].id,
      name: projectsList[indexId].name,
      topics: projectsList[indexId].topics,
      imageFull: projectsList[indexId].imageFull,
      description: projectsList[indexId].description,
      homepage: projectsList[indexId].homepage,
      live: projectsList[indexId].live,
    });
    setShowDetail(true);
  };
  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  const view = (
    <div>
      <div className="projects-dev">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            desc={project.desc}
            topics={project.topics}
            image={project.image}
            seeProjectHandler={seeProjectHandler}
          />
        ))}
      </div>
      <ProjectDetails
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        project={projectD}
      />
    </div>
  );

  return view;
};

export default development;
