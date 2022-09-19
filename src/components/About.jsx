import React from 'react';
import './About.scss';

const About = () => (
  <section id="about">
    <div className="contWidth about">
      <h2>About me</h2>
      <p>
        I&apos;m Retky, a Self-taught developer, becoming a remote full-stack at Microverse,
        workingin collaboration & pair-programming to deploy projects every week in a
        multicultural environment.
        In my free time, I am a video game developer and 3D designer.
      </p>
      <p>
        In the last years, I have been implementing my programming knowledge for web applications
        and some non-coding projects, looking to make them efficient and improve them.
      </p>
      <p>
        In the last few years, I&apos;ve developed extensive projects using:
        <br />
        <br />
        Front-End: JavaScript | React | Redux | HTML5 | CSS3 | SASS | Bootstrap.
        <br />
        Back-End: Rails, Ruby on Rails, PostgreSQL.
        <br />
        Tools & Methods: Git | GitHub | Heroku | Netlify | Mobile/Responsive Development |
        Dev Tools | Webpack | Jest | Mocha.
        <br />
        Design & 3D: Illustrator | Photoshop | ClipStudio | AutoCAD | Revit | Blender | 3DsMax |
        Unity | Unreal.
        <br />
        Professional: Remote Work | Pair-Programming | Mentoring | Collaboration | Teamwork.
      </p>
      <a href="https://drive.google.com/uc?export=download&id=1ux6dewYZejhCwFATU4b1js-VpCTQGldU"><button className="orangeBtn" type="button" name="resume">Get My Resume</button></a>
    </div>
  </section>
);

export default About;
