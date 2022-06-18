import React from 'react';
import { useSelector } from 'react-redux';
import './Works.scss';
import WorkCard from './WorkCard';

const Works = () => {
  const worksList = useSelector((state) => state);

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
              description={work.description}
              topics={work.topics}
              homepage={work.homepage}
              preview={work.preview}
              desc={work.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
