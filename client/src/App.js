import React from 'react';
import './App.css';

// Custom Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div style={{height: "100%"}}>
      <Header />

      <div style={{marginTop: "15px"}}>
        <About />

        <Projects />

        <Experience />
      </div>

    </div>
  );
}

export default App;
