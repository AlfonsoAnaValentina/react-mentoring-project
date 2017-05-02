// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var headerElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "User options")
  );
var mainElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Calendar")
  );
  
var footerElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Next day ->")
  );

ReactDOM.render(headerElement, document.getElementById('header-container'));
ReactDOM.render(mainElement, document.getElementById('main-container'));
ReactDOM.render(footerElement, document.getElementById('footer-container'));

