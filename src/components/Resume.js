import React, { Component } from 'react';

import '../images/Resume.jpg'

export default class Resume extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section className="resume">

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
          <p>910.262.0949</p>
          </div>
        </section>

        <section className="download">
          <div className="resumePDF">
            <img src={require("../images/Resume.jpg")} className="pdf"/>
          </div>
          <a href="https://drive.google.com/file/d/0B8xz73jMvER_YU0wYnAzMGhYR0U/view?usp=sharing" className="downloadLink">Download pdf</a>
        </section>

      </section>
    )
  }
}
