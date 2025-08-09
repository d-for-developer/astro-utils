import { useState } from 'react';
import logo from '../src/assets/images/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import AboutUs from './pages/AboutPage';
import Home from './pages/HomePage';
import Contact from './pages/ContactUs';
import LearnMore from './pages/LearnMore';
import LoShuGridFinal from './pages/LoShuGridFinal';
import NumerologyOne from './pages/numRepresentations/NumerologyOne';
import NumerologyTwo from './pages/numRepresentations/NumerologyTwo';
import NumerologyThree from './pages/numRepresentations/NumerologyThree';
import NumerologyFour from './pages/numRepresentations/NumerologyFour';
import NumerologyFive from './pages/numRepresentations/NumerologyFive';
import NumerologySix from './pages/numRepresentations/NumerologySix';
import NumerologySeven from './pages/numRepresentations/NumerologySeven';   
import NumerologyEight from './pages/numRepresentations/NumerologyEight';
import NumerologyNine from './pages/numRepresentations/NumerologyNine';

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        {/* Header / Navbar */}
        <Navbar expand="lg" bg="light" variant="light" expanded={expanded}>
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: '80px' }}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : true)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/about" onClick={closeMenu}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/learn" onClick={closeMenu}>
                  Learn More
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/finalloshu" element={<LoShuGridFinal />} />
            <Route path="/numerologyOne" element={<NumerologyOne />} />
            <Route path="/numerologyTwo" element={<NumerologyTwo />} />
            <Route path="/numerologyThree" element={<NumerologyThree />} />
            <Route path="/numerologyFour" element={<NumerologyFour />} />
            <Route path="/numerologyFive" element={<NumerologyFive />} />
            <Route path="/numerologySix" element={<NumerologySix />} />
            <Route path="/numerologySeven" element={<NumerologySeven />} />
            <Route path="/numerologyEight" element={<NumerologyEight />} />
            <Route path="/numerologyNine" element={<NumerologyNine />} />


          </Routes>
        </Container>

        {/* Footer */}
        <footer className="bg-light text-center py-3 mt-auto border-top">
          © 2025 All rights reserved.<br/>Designed by d-for-developer.
        </footer>
      </Router>
    </div>
  );
};

export default App;