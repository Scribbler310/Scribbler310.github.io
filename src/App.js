import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="resume-container">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
