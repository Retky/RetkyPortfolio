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
      {/* <div className="about">
        a
      </div> */}
      {/* <div className="contact">
      </div> */}
    </main>
  );

  return view;
};

export default Homepage;
