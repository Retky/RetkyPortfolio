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
          <div className={`menu-container ${isMenuOpen ? 'links-open' : ''}`}>
            <div className="menu-links" role="menu" tabIndex={0} onClick={() => setIsMenuOpen(false)} onKeyUp={() => {}}>
              <a className="link" href="#projects">Projects</a>
              <a className="link" href="#about">About</a>
              <a className="link" href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );

  return element;
};

export default Nav;
