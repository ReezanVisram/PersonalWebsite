import React from 'react';
import './App.css';

// Custom Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Projects />
    </div>
  );
}

export default App;
