import Landing from './Landing';
import About from './About';
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
      <div id="contact" className="contact">
        <form id="contact-form" className="contact-content" action="https://formspree.io/f/mqknqqzb" method="post">
          <h2>Reach Out and Let&apos;s Create Something Amazing!</h2>
          <input className="form-file" type="text" name="name" placeholder="Full Name" required />
          <input className="form-file" type="email" name="mail" placeholder="Email Address" required />
          <textarea className="form-msg" name="message" placeholder="Enter Text Here" maxLength="1200" required />
          <input id="contact-btn" className="orange-btn" type="submit" value="Get in touch" />
        </form>
      </div>
    </main>
  );

  return view;
};

export default Homepage;
