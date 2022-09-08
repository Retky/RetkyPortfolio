import React from 'react';
import './Nav.scss';

const Nav = () => (
  <header id="header">
    <div id="navBar">
      <div id="logo">Retky</div>
      <nav id="navlist">
        <li>Projects</li>
        <li>About</li>
        <li>Contacts</li>
      </nav>
      <div id="burger">=</div>
    </div>
  </header>
);

export default Nav;
