import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const hideNav = { display: displayMenu ? 'block' : 'none' };
  return (
    <header id="header">
      <div id="navBar">
        <a className="navText" href="#landing"><div id="logo">Retky</div></a>
        <nav id="navlist">
          <li><a href="#works">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </nav>
        <div id="burger" role="menu" tabIndex={0} onClick={() => setDisplayMenu(!displayMenu)} onKeyDown={() => setDisplayMenu(!displayMenu)}>=</div>
      </div>
      <div id="burgerMenu" style={hideNav}>
        <li><a href="#works" onClick={() => setDisplayMenu(!displayMenu)}>Projects</a></li>
        <li><a href="#about" onClick={() => setDisplayMenu(!displayMenu)}>About</a></li>
        <li><a href="#contact" onClick={() => setDisplayMenu(!displayMenu)}>Contact</a></li>
      </div>
    </header>
  );
};

export default Nav;
