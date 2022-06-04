import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Works from './components/Works';
import About from './components/About';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <div>
    <Nav />
    <Landing />
    <Works />
    <About />
    <Tools />
    <Contact />
    <Footer />
  </div>
);

export default App;
