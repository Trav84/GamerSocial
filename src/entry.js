require('./styles.css');

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/Header.js';
import Event from './components/Event.js';

export default ReactDOM.render(
  <section>
    <Header />
    <section className="container">
      <Event />
    </section>
  </section>,
  document.getElementById('react-mount')
);

$(document).ready(function() {
  $(".button-collapse").sideNav();
});