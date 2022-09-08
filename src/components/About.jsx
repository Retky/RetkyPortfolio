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
      <a href="https://drive.google.com/uc?export=download&id=1ux6dewYZejhCwFATU4b1js-VpCTQGldU"><button className="orangeBtn" type="button" name="resume">Get My Resume</button></a>
    </div>
  </section>
);

export default About;
