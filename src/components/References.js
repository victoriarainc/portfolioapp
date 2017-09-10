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
          <p>Email: stacey@vernon.com</p>
          <blockquote>"Sleep on keyboard meowwww jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed or paw at beetle and eat it before it gets away."</blockquote>
        </div>

        <div className="ref">
          <h2>Doug Hughes</h2>
          <p>Instructor and Full Stack Developer at The Iron Yard in Raleigh.</p>
          <a href="https://www.linkedin.com/in/doug-hughes/">LinkedIn</a>
          <p>Email: doug@hughes.com</p>
          <blockquote>"Dream about hunting birds knock over christmas tree spend all night ensuring people don't sleep yet chase the pig around the house."</blockquote>
        </div>

        <div className="ref">
          <h2>Lexi Namer</h2>
          <p>Instructor and Front End Developer at The Iron Yard in Raleigh.</p>
          <a href="https://www.linkedin.com/in/lexinamer/">LinkedIn</a>
          <blockquote>"Play riveting piece on synthesizer keyboard lie in the sink all day."</blockquote>
        </div>

        <div className="ref">
          <h2>Kaitlin Saunders</h2>
          <p>Student Instructor at Iron Yard in Raleigh.</p>
          <a href='https://www.linkedin.com/in/kaitlin-saunders/'>LinkedIn</a>
          <blockquote>"Victoria is an excellent team player with strong communication skills and a great attitude. She picks up new, complex concepts quickly and consistently delivers high quality work. No matter the tools or the task, Victoria will find a way to get the job done. "</blockquote>
        </div>

        <div className="ref">
          <h2>Kelly Miller</h2>
          <p>Iron Yard - Raleigh</p>
          <p>Email: ukmills12@gmail.com</p>
          <blockquote>" Victoria is an excellent problem solver and has a relentless work-ethic. If she does not know the immediate solution to a problem, she will seek the appropriate resources needed to solve it.
"</blockquote>
        </div>

      </section>
    )
  }
}
