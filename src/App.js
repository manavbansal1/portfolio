import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';

import './App.css';

function App() {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  return (
    <div className="App">
      <Router>
      <Navbar  onContactClick={openContactModal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      <Contact 
          isOpen={isContactModalOpen} 
          onClose={closeContactModal} 
      />
    </div>
  );
}

export default App;
