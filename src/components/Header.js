/**
 * Created by trav84 on 2/21/16.
 */
import React from 'react';
import { Link, history } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/src" className="brand-logo">Logo</a>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li><Link to="createevent">Create Game Event</Link></li>
            <li><Link to="eventlist">View Games</Link></li>
            <li><a href="#">Your Queue</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Create Game Event</a></li>
            <li><a href="#">View Games</a></li>
            <li><a href="#">Your Queue</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </div>
      </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Header;