import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const servicesRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToExpertise={() => scrollToSection(expertiseRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
      />
      <Home />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={expertiseRef}>
        <Expertise />
      </div>
      {/* <div ref={servicesRef}>
        <Services />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
