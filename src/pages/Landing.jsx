import SocialLinks from '../components/SocialLinks';
import '../styles/Landing.scss';

const Landing = () => {
  const view = (
    <div id="home" className="landing">
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
  );

  return view;
};

export default Landing;
