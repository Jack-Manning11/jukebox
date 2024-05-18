import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the Jukebox App</h1>
      <Link to="/jukebox">
        <button>Log in to Spotify</button>
      </Link>
    </div>
  );
};

export default Landing;
