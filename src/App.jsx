import React from 'react';
import { Link, Route } from 'wouter';
import Jukebox from './Jukebox';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about.html">About</a>
        </li>
        <li>
          <Link href="/jukebox">Jukebox</Link>
        </li>
      </ul>
    </nav>
    <Route path="/jukebox" component={Jukebox} />
  </div>
);

export default App;
