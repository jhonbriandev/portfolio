import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        padding: "var(--space-lg)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        Prueba
      </h1>

      <Navbar />
      <Hero></Hero>
      {/* El navegador saltará justo aquí gracias al id */}

      <section id="aboutme">
        <AboutMe />
      </section>
      <Skills></Skills>
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer></Footer>
    </div>
  );
}

export default App;
