import React, { Component } from 'react';

export default class BaseLayout extends Component {
  constructor () {
    super ()

  }
  render () {
    return (
      <div>
        <header> Nav links to Home, About, and Portfolio </header>
        <section>  </section>
        <footer> Contact Info </footer>
      </div>
    )
  }
}
