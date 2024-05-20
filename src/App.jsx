import React from 'react';
import { Route, Router } from 'wouter';

import Jukebox from './Jukebox';
import Landing from './Landing';

const App = () => (
  <Router>
    <div>
      <Route path="/jukebox" component={Jukebox} />
      <Route path="/" component={Landing} />
    </div>
  </Router>
);

export default App;
