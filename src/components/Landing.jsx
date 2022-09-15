import React from 'react';
import Social from './Social';
import './Landing.scss';

const Landing = () => (
  <section id="landing">
    <div className="contWidth land">
      <h1 className="hero">
        Hey There.
        <br />
        I&apos;m J. Luis Arredondo
      </h1>
      <p>
        <span> I&apos;m a Software Developer </span>
        <br />
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
