require('./styles.css');

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/Header';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import MyQueue from './components/MyQueue';

export default ReactDOM.render(
  <section>
    <Header />
    <section className="container">
      <EventList />
      <CreateEvent />
    </section>
  </section>,
  document.getElementById('react-mount')
);

$(document).ready(function() {
  $(".button-collapse").sideNav();
});