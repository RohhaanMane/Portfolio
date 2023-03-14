import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Header/hero";

import Projects from "./components/Projects/Projects";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PortfolioProvider from "./context/PortfolioProvider";
import PortfolioContext from "./context/portfolio-context";

function App() {
  const themeCtx = useContext(PortfolioContext);

  return (
    <div className={themeCtx.theme ? "bg-[#23283e]" : ''}>
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
