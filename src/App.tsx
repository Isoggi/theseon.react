import React, { Component } from 'react';
import {logo} from './images';
// import Header from './components/layout/header'
// import { index } from './home'
// import { render } from '@testing-library/react';
// import {} from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Header/> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="theseon." />
          <p>
            {/* Edit <code>src/App.tsx</code> and save to reload. */}
            <code>theseon.</code>
          </p>
          <a
            className="App-link"
            href="#root"
            target="_self"
            rel="noopener noreferrer"
          >
            Something will coming soon.
          </a>
        </header>
      </div>
    );
  }
}
export default App;
