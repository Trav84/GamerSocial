import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

import "./login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
  };

  login = (service) => {
    base.authWithOAuthPopup(service, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };

  render() {
    return (
      <section className="login">
        <div className="row">
          <a className="waves-effect waves-light btn" onClick={ () => { this.login("google") } }>Google</a>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn" onClick={ () => { this.login("facebook") } }>Facebook</a>
        </div>
        <div className="row">
          <Link to="/Register" className="waves-effect waves-light btn">Register</Link>
        </div>
      </section>
    );
  }
}

export default Login;