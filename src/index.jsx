// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {className: 'Contact'},
        React.createElement('h2', {className: 'Contact-name'}, this.props.name)
      )
    )
  },
});

var element = React.createElement(ContactItem, {name: "Spark Digital Employee"});

var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "USer Info"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {href: '/perfil'}, "perfil"),
        React.createElement('a', {href: '/info-beneficio'}, 'Informacion sobre los masajes')
      )
    )
  ) 

ReactDOM.render(element, document.getElementById('react-app2'));
ReactDOM.render(rootElement, document.getElementById('react-app'));
ReactDOM.render(<App />, document.getElementById('react-root'));

