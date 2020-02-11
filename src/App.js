import React from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="theseon." />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <code>theseon.</code>
        </p>
        <a
          className="App-link"
          href="#"
          target="_self"
          rel="noopener noreferrer"
        >
          Something will coming soon.
        </a>
      </header>
    </div>
  );
}

export default App;
