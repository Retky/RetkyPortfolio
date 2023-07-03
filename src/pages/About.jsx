import '../styles/About.scss';

const About = () => {
  const view = (
    <div id="about">
      <div className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I&apos;m Retky, a versatile Full-stack and Videogame Developer with a passion for
            creating immersive experiences.
            <br />
            My background in architecture brought me skills in design thinking, resource
            management, and user-centric approaches. Also have a natural ability to adapt quickly
            to new programming languages, leveraging my existing knowledge to build dynamic and
            seamless solutions.
          </p>
          <p>
            As a Full-stack Developer, I excel in developing cutting-edge web applications and
            platforms.
            <br />
            I have a knack for developing visually stunning and user-friendly interfaces that
            captivate users. On the backend, I specialize in building robust and scalable
            server-side solutions that seamlessly integrate with front-end frameworks and APIs.
          </p>
          <p>
            My passion for video game development shines through in my work as a Generalist.
            I possess a strong command over 3D and 2D asset creation, as well as designing
            engaging gameplay and mechanics. Crafting captivating and immersive experiences
            for players.
          </p>
          <p>
            Throughout my career, I have honed essential soft skills such as collaboration,
            communication, and problem-solving. I thrive in remote work environments, where
            I value teamwork and embrace pair programming. Additionally, my experience as a
            mentor has allowed me to guide and inspire fellow developers, fostering a positive
            and productive working atmosphere.
          </p>
          <button className="orange-btn" type="button">Get My Resume</button>
        </div>
      </div>
      <div className="stack">
        <div className="stack-content">
          <ul className="stack-list">
            <h3>Languages</h3>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>C#</li>
            <li>SQL</li>
            <li>Lua</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul className="stack-list">
            <h3>Libraries & Frameworks</h3>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>Webpack</li>
            <li>Jest</li>
            <li>Rspec</li>
          </ul>
          <ul className="stack-list">
            <h3>Tools</h3>
            <li>Git</li>
            <li>GitHub</li>
            <li>Firebase</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Unity</li>
            <li>Unreal Engine</li>
            <li>Blender</li>
            <li>3DS Max</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return view;
};

export default About;
