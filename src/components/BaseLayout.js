import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <div><button className="btn"><Link to="/">Landing</Link></button></div>
          <div><button className="btn"><Link to="/home">Home</Link></button></div>
          <div><button className="btn"><Link to="/about">About</Link></button></div>
          <div><button className="btn"><Link to="/portfolio">Portfolio</Link></button></div>
        </header>
        {this.props.children}
        <footer>
          <a href = "https://www.linkedin.com/in/victoria-coleman-00010275/" > LinkedIn </a>
          <a href = "https://www.instagram.com/handmadebyvi/?hl=en" > Instagram </a>
          <a href = "https://www.patreon.com/victoriarain" > Patreon </a>
          <a href = "https://www.facebook.com/viphotography.raleigh/" > ViPhotography </a>
        </footer>
      </div>
    );
  }
}
