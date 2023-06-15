import '../styles/HomePage.scss';

const Homepage = () => {
  const view = (
    <main className="home">
      <div className="landing">
        <div className="landing-content">
          <h1>
            Hello,
            <br />
            I&apos;m Luis Arredondo
            <br />
            <span>Full-Stack Web & Video Game Developer.</span>
          </h1>
          <p>
            Are you looking to create captivating experiences and solve
            complex problems through the power of code? I can help you with that.
          </p>
        </div>
      </div>
    </main>
  );

  return view;
};

export default Homepage;
