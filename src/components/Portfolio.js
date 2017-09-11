import React, { Component } from 'react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section className="portfolio">

        <div className="projectWrapper">
          <h3 className="project"> HandmadebyVi </h3>
            <p className="bullet">is a passion project of mine that brings to life my handmade paper crafts and service on the web. I lead the  product design, creation, photography, and social media presence of this business.</p>
            <p>TOOLS: HTML, CSS, REACT, & GIT</p>
            <a href="https://github.com/victoriarainc/ecommerce">Github</a>

          <h3 className="project"> ViPhotography </h3>
            <p className="bullet">is a hobby that I use to hone my creativity, connect to the community, and volunteer for local events such as Out!Raleigh. </p>
            <p>TOOLS: HTML, CSS, REACT, & GIT</p>
            <a href="https://github.com/victoriarainc/ViPhotography">In progress</a>

          <h3 className="project"> From Craft to Code </h3>
            <p className="bullet">is a blog that I designed and created to talk about my experience at The Iron Yard as I learned  front and back end development skills. I used my posts as a tool to guide other students in our projects and created a Slack to be a resource for others.</p>
            <p>TOOLS: BLOGGER, HTML, CSS</p>
            <a href="http://fromcrafttocode.blogspot.com/">Github</a>

        </div>
      </section>
    )
  }
}
