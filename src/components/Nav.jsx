import React from 'react';
import './Nav.scss';

const Nav = () => {
  const hideNav = { display: 'none' };
  return (
    <header id="header">
      <div id="navBar">
        <a className="navText" href="#landing"><div id="logo">Retky</div></a>
        <nav id="navlist">
          <li><a href="#works">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </nav>
        <div id="burger">=</div>
      </div>
      <div id="burgerMenu" style={hideNav}>
        <li><a href="#works">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
    </header>
  );
};

export default Nav;
