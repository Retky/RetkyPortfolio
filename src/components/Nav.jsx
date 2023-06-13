import '../styles/Nav.scss';

const Nav = () => {
  const element = (
    <header>
      <div className="header">
        <div className="logo"> Retky </div>
        <nav>
          <button type="button" className="hamburger" onClick={() => console.log('clicked')}>=</button>
          <div className="links-list">
            <ul className="page-links">
              <li className="link">Projects</li>
              <li className="link">About</li>
              <li className="link">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );

  return element;
};

export default Nav;
