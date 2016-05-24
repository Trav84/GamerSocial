require('./styles.css');

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/Header';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import MyQueue from './components/MyQueue';

import { Router, Route, Link, hashHistory } from 'react-router'

export default ReactDOM.render(
    	<Router history={hashHistory}>
	    	<Route path="/" component={Header}>
	    	  	<Route path="/eventlist" component={EventList}/>
		      	<Route path="/createevent" component={CreateEvent}/>
            </Route>
      	</Router>,
  document.getElementById('react-mount')
);

$(document).ready(function() {
  $(".button-collapse").sideNav();
});