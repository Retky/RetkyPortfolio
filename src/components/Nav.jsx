import { useState } from 'react';
import '../styles/Nav.scss';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const element = (
    <header>
      <div className="header">
        <div className="logo"> Retky </div>
        <nav>
          <button type="button" className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>=</button>
          <div role="menu" tabIndex={0} className={`links-list ${isMenuOpen ? 'links-open' : ''}`} onClick={() => setIsMenuOpen(false)} onKeyUp={() => {}}>
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
