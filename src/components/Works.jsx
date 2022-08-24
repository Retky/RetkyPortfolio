import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorks } from '../redux/works/worksR';
import './Works.scss';
import WorkCard from './WorkCard';

const Works = () => {
  const dispatch = useDispatch();
  const worksList = useSelector((store) => store.works);

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
