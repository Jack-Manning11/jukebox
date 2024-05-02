import React from 'react';

import Dashboard from './Dashboard';
import Login from './Login';
import Landing from './Landing'

import { Container } from './styles/App.styles';

const App = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  return <Landing />;
};

export default App;

//<Container>{code ? <Dashboard code={code}/> : <Login />}</Container>