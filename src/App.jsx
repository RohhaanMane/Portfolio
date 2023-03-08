import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Header/hero'

import Projects from './components/Projects/Projects';
import './App.css'
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    </div>
  )
}

export default App
