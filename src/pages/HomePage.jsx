import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import '../styles/HomePage.scss';

const Homepage = () => {
  const view = (
    <main className="home">
      <Landing />
      {/* <div className="projects">
        <div className="projects-content">
        </div>
      </div> */}
      <About />
      <Contact />
    </main>
  );

  return view;
};

export default Homepage;
