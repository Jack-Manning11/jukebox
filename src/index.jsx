import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import GlobalStyles from "./styles/globalStyles.styles";
import './styles/font.css';


ReactDOM.render(
  <>
    <GlobalStyles />
    <Landing />
  </>,
  document.getElementById('root')
);