import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Project from './pages/Project';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
