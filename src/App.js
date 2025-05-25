import logo from '../src/assets/images/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AboutUs from './pages/AboutPage';
import Home from './pages/HomePage';
import Contact from './pages/ContactUs';
import LearnMore from './pages/LearnMore';
import LoShuGrid from './pages/LoshuGrid';
import './App.css';

const App = () => {
  return (
  <div className="page-wrapper">
    <Router>
      <header className="header">
        <a href='/'><img src={logo} alt="Logo" className="logo-image" /></a>
        <nav className="nav">
             {/* Header */}
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/learn">Learn More</Link>
          </nav>
        </header>


        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/loshu" element={<LoShuGrid />} />
          </Routes>
        </main>

        {/* Footer */}
     <footer className="footer">
        © 2025 All rights reserved. Designed by d-for-developer.
      </footer>
    </Router>
    </div>
  );
};

export default App;
