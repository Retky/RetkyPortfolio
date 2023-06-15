import SocialLinks from '../components/SocialLinks';
import '../styles/HomePage.scss';

const Homepage = () => {
  const view = (
    <main className="home">
      <div className="landing">
        <div className="landing-content">
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
          <SocialLinks />
        </div>
      </div>
    </main>
  );

  return view;
};

export default Homepage;
