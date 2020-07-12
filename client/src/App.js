import React from 'react';
import './App.css';

// Custom Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Projects />

      <Experience />
    </div>
  );
}

export default App;
