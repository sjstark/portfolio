import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div style={{ background: 'white', width: '100vw', height: '100vh' }}>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
