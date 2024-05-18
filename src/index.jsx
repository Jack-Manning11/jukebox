import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from "./styles/globalStyles.styles";
import './styles/font.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
