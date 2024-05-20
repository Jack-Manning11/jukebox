import React from 'react';
import { Route, Router } from 'wouter';

import Jukebox from './Jukebox';

const App = () => (
  <Router>
    <div>
      <Route path="/jukebox" component={Jukebox} />
    </div>
  </Router>
);

export default App;
