import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from "./styles/GlobalStyles"

import Header from "./components/Header/Header";

import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


