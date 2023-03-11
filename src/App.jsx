import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Header/hero";

import Projects from "./components/Projects/Projects";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
