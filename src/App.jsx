import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar';

import Projects from './components/Projects/Projects';
import './App.css'

function App() {
  return (
    <div>
    <Navbar />

    <Projects />
    </div>
  )
}

export default App
