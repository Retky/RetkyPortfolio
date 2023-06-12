import '../styles/Nav.scss';

const Nav = () => {
  const element = (
    <header>
      <div className="logo"> Retky </div>
      <nav>
        <div className="hamburger">=</div>
        <ul className="page-links">
          <li className="link">Projects</li>
          <li className="link">About</li>
          <li className="link">Contact</li>
        </ul>
      </nav>
    </header>
  );

  return element;
};

export default Nav;
