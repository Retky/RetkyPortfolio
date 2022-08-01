import React from 'react';
import './About.scss';

const About = () => (
  <section id="about">
    <div className="contWidth about">
      <h2>About me</h2>
      <p>
        Hello I’m a software developer!
        I can help you build a product, feature or website Look through some of my work and
        experience!
        If you like what you see and have a project you need coded, don’t hestiate to contact me.
      </p>
      <a href="https://docs.google.com/document/d/16QLVxjN6pPfF7RHXBKo2ItudBZH3dCyZmZaNX8rMxI8/edit"><button className="orangeBtn" type="button" name="resume">Get My Resume</button></a>
    </div>
  </section>
);

export default About;
