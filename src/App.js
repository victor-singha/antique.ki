import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gyan from "./components/Gyan";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Hero />
      <Stats />
      <Team />
      <Gyan />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
