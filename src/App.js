import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Tools from './components/Tools';
import Contact from './components/Contact';
import './App.scss';

const App = () => (
  <div>
    <Nav />
    <Landing />
    <About />
    <Tools />
    <Contact />
  </div>
);

export default App;
