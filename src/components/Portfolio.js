import React, { Component } from 'react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <section className="portfolio">
        <div>

        </div>

        <div className="resume">
          <h3> Core Competencies </h3>
            <section className="bullet">
             <p className="line">
             Git & GitHub - HTML/CSS - JavaScript - React - Node - Mongo/Mongoose - SQL/Postgres - jQuery - Bootstrap
             </p>
            </section>

          <h3> Experience </h3>
            <p className="bullet">
            My background is varied from customer service and childcare to crafts
            and demonstrations. I graduated with an Associates in Psychology, my
            underlying passion that drives all of my pursuits, and Honors credit
            in the Social Sciences.
            </p>

          <h3> Projects </h3>
            <p className="bullet">
            Follow the links below to view some of my ongoing projects. Instagram
            will lead you to HandmadebyVi - a crafty wonderland with a focus on
            paper, recycling, and reuse. Patreon is a related project. It is a
            site that connects artists to fans and provides a kickstarter/subscription
            box type platform for any type of creator to post to. ViPhotography
            is a Facebook page that I manage and post albums of candid portraits to.

            </p>

        </div>
      </section>
    )
  }
}
