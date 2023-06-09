import '../styles/Nav.scss';

const Nav = () => {
  const element = (
    <header>
      <div className="logo"> Retky </div>
      <nav>
        <ul className="page-links">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

  );

  return element;
};

export default Nav;
