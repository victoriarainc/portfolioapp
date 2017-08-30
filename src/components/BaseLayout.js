import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './BaseLayout.js';
import Home from './Home.js';
// import About from './About.js';
// import Portfolio from './Portfolio.js';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

registerServiceWorker();
