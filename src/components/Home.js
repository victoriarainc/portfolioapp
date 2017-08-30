import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div><button className="btn"><Link to="/home">Home</Link></button></div>
        <div><button className="btn"><Link to="/about">About</Link></button></div>
        <div><button className="btn"><Link to="/portfolio">Portfolio</Link></button></div>
      </div>
    );
  }
}
