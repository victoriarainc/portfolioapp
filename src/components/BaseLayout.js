import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

import '../styles/App.css';
import '../images/vi.jpg';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={require("../images/vi.jpg")} className="image"/>
          <h1>Victoria Rain C.</h1>
          <span>Creator. Developer.</span>
          <div className="link"><NavLink to="/about">About</NavLink></div>
          <div className="link"><NavLink to="/portfolio">Portfolio</NavLink></div>
          <div className="link"><NavLink to="/references">References</NavLink></div>
          <div className="link"><NavLink to="/resume">Resume</NavLink></div>
        </header>
        <section className="propsBody">
        {this.props.children}
        </section>
        <footer>
          <a href = "https://www.linkedin.com/in/victoria-coleman-00010275/" target="_blank"> LinkedIn </a>
          <a href = "https://www.instagram.com/handmadebyvi/?hl=en" > Google + </a>
          <a href = "http://fromcrafttocode.blogspot.com/" > Blog </a>
          <a href = "https://www.facebook.com/viphotography.raleigh/" > ViPhotography </a>
          <a href = "https://www.patreon.com/victoriarain" > Patreon </a>

        </footer>
      </div>
    );
  }
}
