import React, { Component } from 'react';
// import BaseLayout from './BaseLayout.js';
import '../styles/App.css';

import '../images/vi.jpg'

class App extends Component {
  render() {
    return (
      <div className="landing">
      <img src={require("../images/vi.jpg")} className="image"/>
      <h1> Hi! I'm Victoria. </h1>
      <p>
      Click on one of the links above to
      learn a little more about me! </p>
      </div>
    );
  }
}

export default App;
