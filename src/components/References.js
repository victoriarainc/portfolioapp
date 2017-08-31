import React, { Component } from 'react';

export default class References extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section className="allRef">

        <div className="ref">
          <h2>Stacey Vernon</h2>
          <p>Campus director at The Iron Yard in Raleigh.</p>
          <a href="https://www.linkedin.com/in/staceyvernon/">LinkedIn</a>
          <p>Phone: 919.867.5309</p>
          <p>Email: stacey@vernon.com</p>
          <blockquote>"Sleep on keyboard meowwww jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed or paw at beetle and eat it before it gets away."</blockquote>
        </div>

        <div className="ref">
          <h2>Doug Hughes</h2>
          <p>Instructor and Full Stack Developer at The Iron Yard in Raleigh.</p>
          <a href="https://www.linkedin.com/in/doug-hughes/">LinkedIn</a>
          <p>Phone: 919.867.5309</p>
          <p>Email: doug@hughes.com</p>
          <blockquote>"Dream about hunting birds knock over christmas tree spend all night ensuring people don't sleep yet chase the pig around the house."</blockquote>
        </div>

        <div className="ref">
          <h2>Lexi Namer</h2>
          <p>Instructor and Front End Developer at The Iron Yard in Raleigh.</p>
          <a href="https://www.linkedin.com/in/lexinamer/">LinkedIn</a>
          <p>Phone: 919.867.5309</p>
          <p>Email: lexi@namer.com</p>
          <blockquote>"Play riveting piece on synthesizer keyboard lie in the sink all day."</blockquote>
        </div>

        <div className="ref">
          <h2>Stefanie Despagni</h2>
          <p>Manager at Paper Source in Raleigh.</p>
          <p>Phone: 919.867.5309</p>
          <p>Email: stefanie@despagni.com</p>
          <blockquote>"Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food."</blockquote>
        </div>

        <div className="ref">
          <h2>Amy Miller</h2>
          <p>Supervisor at The Dollar Book Exchange in Raleigh.</p>
          <p>Phone: 919.867.5309</p>
          <p>Email: amy.miller.com</p>
          <blockquote>"Roll on the floor purring your whiskers off lick plastic bags, yet have my breakfast spaghetti yarn, claw drapes, but swat at dog. Instead of drinking water from the cat bowl, make sure to steal water from the toilet."</blockquote>
        </div>

      </section>
    )
  }
}
