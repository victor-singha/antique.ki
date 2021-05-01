import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Gyan from './components/Gyan';
import Stats from './components/Stats';
import Team from './components/Team'

function App() {
  return (
    <div className="App">
      <Stats/>
      <Team/> 
      <Gyan/> 
      <Footer/>
    </div>
  );
}

export default App;
