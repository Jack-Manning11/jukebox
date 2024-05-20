import React from 'react';

import Dashboard from './Dashboard';
import Login from './Login';

import { Container } from './styles/App.styles';

const Jukebox = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  return <Container>{code ? <Dashboard code={code}/> : <Login />}</Container>;
};

export default Jukebox;
