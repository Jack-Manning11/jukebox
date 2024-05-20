import React from 'react';
import { Link, Route } from 'wouter';
import Home from './Home';
import About from './About';
import Jukebox from './Jukebox';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/about.html">About</a>
        </li>
        <li>
          <Link href="/jukebox">Jukebox</Link>
        </li>
      </ul>
    </nav>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/jukebox" component={Jukebox} />
  </div>
);

export default App;
