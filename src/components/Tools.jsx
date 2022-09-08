import React from 'react';
import './Tools.scss';

const Tools = () => (
  <section id="tools">
    <div className="contWidth tool">
      <ul className="toolList">
        <h3>Language</h3>
        <li>CSS</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>Ruby</li>
      </ul>

      <ul className="toolList">
        <h3>Frameworks</h3>
        <li>Bootstrap</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>RSpec</li>
        <li>Ruby on Rails</li>
        <li>Sass</li>
      </ul>

      <ul className="toolList">
        <h3>Skills</h3>
        <li>GitHub</li>
        <li>GitLab</li>
        <li>Terminal</li>
      </ul>
    </div>
  </section>
);

export default Tools;
