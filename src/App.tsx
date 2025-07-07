import React from 'react';
import StarField from './components/StarField';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;