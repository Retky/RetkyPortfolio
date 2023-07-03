import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/HomePage.scss';

const Homepage = () => {
  const view = (
    <main className="home">
      <Landing />
      <Projects />
      <About />
      <Contact />
    </main>
  );

  return view;
};

export default Homepage;
