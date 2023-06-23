import SocialLinks from '../components/SocialLinks';
import '../styles/HomePage.scss';

const Homepage = () => {
  const view = (
    <main className="home">
      <div className="landing">
        <div className="landing-content">
          <div className="presentation">
            <h1>
              Hello,
              <br />
              <br />
              I&apos;m Luis Arredondo
              <br />
              <span className="subtitle">
                {'Full-Stack Web & '}
                <span className="nowrap">Video Game</span>
                {' Developer.'}
              </span>
            </h1>
            <p>
              Are you looking to create captivating experiences and solve complex
              problems through the power of code and 3D?
              <br />
              I can help you with that.
            </p>
          </div>
          <SocialLinks
            section="landing"
          />
        </div>
      </div>
      {/* <div className="projects">
      </div> */}
      <div id="about">
        <div className="about">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              a
            </p>
            <button type="button">Get My Resume</button>
          </div>
        </div>
        <div className="stack">
          <div className="stack-content">
            <ul className="stack-list">
              <h3>Languages</h3>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>C#</li>
              <li>PostgreSQL</li>
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
      <div id="contact" className="contact">
        <form id="contact-form" className="contact-content" action="https://formspree.io/f/mqknqqzb" method="post">
          <input className="form-file" type="text" name="name" placeholder="Full Name" required />
          <input className="form-file" type="email" name="mail" placeholder="Email Address" required />
          <textarea name="message" placeholder="Enter Text Here" maxLength="500" required />
          <input id="contact-btn" className="orange-btn" type="submit" value="Get in touch" />
        </form>
      </div>
    </main>
  );

  return view;
};

export default Homepage;
