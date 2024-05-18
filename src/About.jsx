import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About the Jukebox App</h1>
      <p>This app allows you to create and manage your music playlists.</p>
      <Link to="/jukebox">
        <button>Log in to Spotify</button>
      </Link>
    </div>
  );
};

export default About;
