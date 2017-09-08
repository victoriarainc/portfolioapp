import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section>

        <div className="aboutDiv">
        <h2>About Victoria Rain</h2>
        <p>Born and raised in North Carolina - Raleigh resident since 2011
        and homeowner for 3 years. I'm an artist, creative, maker, photographer,
        and developer but most of all passionate about seeing ideas become
        reality. Whether those dreams are mine or not I bring all of my experience
        and passion to the table.</p>
        </div>

        <div className="aboutDiv">
        <h3>Community</h3>
        <p>Raleigh has become home for me over the last few years. I started
        volunteering for my community in high school by assisting Raleigh
        Little Theater during the Miss Firecracker show in 2012. Shortly after
        that I worked with the Cameron Village Library, TechShop and the Maker
        community, as well as leading the children's program for Dollar Book
        Exchange. I am now a volunteer at our LGBT Center to provide resources
        to our LGBT community and help organize events such as Out!Raleigh that
        aims to celebrate and empower. I intend to continue to work with Kelly Taylor
        and Jim Manchester on maintaining the center's website and mobile application.</p>
        </div>

        <div className="aboutDiv">
        <h3>Photography</h3>
        <p>Vi Photography is a hobby of mine that allows me to continue to connect
        with the Raleigh community and use the soft skills I've developed over the
        years in retail. I strongly believe in communication through body language
        and my history in Psychology and art helps breed a candid and authentic feel
        in my photos.</p>
        </div>

        <div className="aboutDiv">
        <h3>Handmade by Vi</h3>
        <p>Another way I connect with Raleigh is through my crafts. After teaching and
        creating at Paper Source for over a year I wanted to take the skills I had
        learned and pass them along to my community. I encourage reducing waste and
        recycling materials such as promotion material, paper bills, and other product
        that would otherwise get thrown out. This not only allows for a positive and
        environmentally friendly message but allows these activities to reach a larger
        audience that may not have the resources to spend what can be excessive amounts
        on scrapbooking and crafting supplies.</p>
        <p>I reach the most amount of people through my instagram @handmadebyvi but the
        community can also follow and support HandmadebyVi through <a href='www.patreon.com/victoriarain'>Patreon.com</a>
        , an online platform that provides artists a space to send monthly gifts to participants for
        their contributions.</p>
        </div>

      </section>
    )
  }
}
