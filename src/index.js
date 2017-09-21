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
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import Resume from './components/Resume';
import References from './components/References';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/references" component={References} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
