// Import React Stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Import Styles
import './styles/index.css';

// Import React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Service Worker
import registerServiceWorker from './registerServiceWorker';

// Import components
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import References from './components/References';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/references" component={References} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/home" component={Home} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
