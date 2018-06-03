import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import indexRoutes from 'routes/index.jsx';
import 'assets/scss/app.css';
import 'typeface-roboto';

import registerServiceWorker from './registerServiceWorker';
import fontAwesome from '@fortawesome/fontawesome';

// TODO: I should be able to use tree-shaking or transform-imports to skip importing ALL icons and only use necessary ones via destructuring
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

fontAwesome.library.add(faTwitter, faStackOverflow, faGithub);

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.querySelector('#root')
);

registerServiceWorker();
