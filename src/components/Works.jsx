import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorks } from '../redux/works/worksR';
import './Works.scss';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';

const Works = () => {
  const dispatch = useDispatch();
  const worksList = useSelector((store) => store.works);
  const [showDetail, setShowDetail] = React.useState(false);
  const [workD, setWorkD] = React.useState({
    id: 0,
    name: '',
    topics: [],
    imageFull: '',
    description: '',
    homepage: '',
    live: '',
  });

  const seeWorkHandler = (e) => {
    console.log(e.target.id);
    const indexId = worksList.findIndex((work) => work.id === Number(e.target.id));
    setWorkD({
      id: worksList[indexId].id,
      name: worksList[indexId].name,
      topics: worksList[indexId].topics,
      imageFull: worksList[indexId].imageFull,
      description: worksList[indexId].description,
      homepage: worksList[indexId].homepage,
      live: worksList[indexId].live,
    });
    setShowDetail(true);
  };

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

  return (
    <section id="works">
      <div className="contWidth work">
        <h3>My Recent Works</h3>
        <div id="featured">MainWork</div>
        <div id="workList">
          {worksList.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              name={work.name}
              desc={work.desc}
              topics={work.topics}
              image={work.image}
              imageHover={work.imageHover}
              seeWorkHandler={seeWorkHandler}
            />
          ))}
        </div>
      </div>
      <WorkDetail
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        work={workD}
      />
    </section>
  );
};

export default Works;
