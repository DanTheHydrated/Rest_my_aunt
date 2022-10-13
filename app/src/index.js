import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Calling from './calling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <div>
    <h1>Egg!</h1>
    <button> Get Menu! </button>
    <Calling />
  </div>
  </StrictMode>
);











//{/* <button onClick={calling()}> Get Data! </button> */}