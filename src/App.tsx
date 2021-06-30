import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Global/Context';
import NavBody from './Nav/NavBody/index';
import NavRoute from './Nav/NavRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Context>
      <div className="App">
      <BrowserRouter>
      <NavRoute/>
       <NavBody/>
      </BrowserRouter>
      </div>
    </Context>
  );
}

export default App;
