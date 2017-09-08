import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="link"><NavLink to="/about">About</NavLink></div>
          <div className="link"><NavLink to="/portfolio">Portfolio</NavLink></div>
          <div className="link"><NavLink to="/references">References</NavLink></div>
          <div className="link"><NavLink to="/contact">Contact</NavLink></div>
        </header>
        <section className="body">
        {this.props.children}
        </section>
        <footer>
          <a href = "https://www.linkedin.com/in/victoria-coleman-00010275/" > LinkedIn </a>
          <a href = "https://www.instagram.com/handmadebyvi/?hl=en" > Instagram </a>
          <a href = "https://www.patreon.com/victoriarain" > Patreon </a>
          <a href = "https://www.facebook.com/viphotography.raleigh/" > ViPhotography </a>
          <a href = "http://fromcrafttocode.blogspot.com/" > Blog </a>
        </footer>
      </div>
    );
  }
}
