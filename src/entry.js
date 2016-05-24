require('./styles.css');

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/Header';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import MyQueue from './components/MyQueue';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

import './components/main.scss';

import { Router, Route, Link, hashHistory } from 'react-router'

export default ReactDOM.render(
    	<Router history={hashHistory}>
	    	<Route path="/" component={Header}>
		      	<Route path="/create" component={CreateEvent}/>
	    	  	<Route path="/games" component={EventList}/>
	    	  	<Route path="/queue" component={MyQueue}/>
	    	  	<Route path="/profile" component={Profile}/>
	    	  	<Route path="/login" component={Login}/>
	    	  	<Route path="/register" component={Register}/>
            </Route>
      	</Router>,
  document.getElementById('react-mount')
);

$(document).ready(function() {
  $(".button-collapse").sideNav();
});