import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => (
  <div className="app">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
