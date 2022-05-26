import React from 'react';
import Social from './Social';
import './Landing.scss';

const Landing = () => (
  <section id="landing">
    <div className="contWidth">
      <h1>
        Hey There
        <span> I&apos;m Retky </span>
      </h1>
      <p>
        <span> I&apos;m a Software Developer </span>
        I can help you build a product,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <Social />
    </div>
  </section>
);

export default Landing;
