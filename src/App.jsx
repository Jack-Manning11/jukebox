import React from 'react';
import { Link, Route } from 'wouter';
import Home from './Home';
import About from './About';
import Login from './Login';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/jukebox">Jukebox</Link>
        </li>
      </ul>
    </nav>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/jukebox" component={Login} />
  </div>
);

export default App;
