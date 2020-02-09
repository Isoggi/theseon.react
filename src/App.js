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
    // <div class="header-container">
		// 	<header id="header" class="alt">
		// 		<div class="logo">
		// 		    <a href="">
		// 		        <img src="images/logo.png" alt="theseon" style="width:42px; height:42px" />
		// 		        </a>
		// 		    </div>
		// 		<a href="#menu">Menu</a>
		// 	</header>
    // </div>
  );
}

export default App;
