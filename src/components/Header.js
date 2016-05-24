import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/src" className="brand-logo">Logo</a>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li><Link to="/create">Create Event</Link></li>
            <li><Link to="/games">View Games</Link></li>
            <li><Link to="/queue">Your Queue</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><Link to="/create">Create Event</Link></li>
            <li><Link to="/games">View Games</Link></li>
            <li><Link to="/queue">Your Queue</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </div>
        {this.props.children}
      </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Header;