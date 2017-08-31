import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section className="contact">
        <div className="contactType">
        <h3> Email </h3>
        <p> viography.raleigh@gmail.com </p>
        </div>

        <div className="contactType">
        <h3> Google + </h3>
        <p> plus.google.com/+VictoriaColeman</p>
        </div>

        <div className="contactType">
        <h3> Phone </h3>
        <p>910.867.5309</p>
        </div>
      </section>
    )
  }
}
