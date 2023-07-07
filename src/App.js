import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => (
  <div className="app">
    <Nav />
    <HomePage />
    <Footer />
  </div>
);

export default App;
