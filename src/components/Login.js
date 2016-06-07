import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from 'react-router';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

import "./login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  login (service) {
    base.authWithOAuthPopup(service, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        // Create
        base.createUser({
          name: authData.displayName,
          password: 'test',
          email: 'tet@test.com'
        });
      }
    });
  };

  simpleLogin = () => {
    // Simple email authentication
    base.authWithPassword({
      email    : this.state.email,
      password : this.state.password
    }, function(err) {
      console.log(err);
    });

    //// Listen to authentication
    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      }
      else {
        console.log("User is logged out");
      }
    }

    base.onAuth(this.authDataCallback);
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
        <div className="input-field col s12">
          <input
            placeholder="Bobsmith@gmail.com"
            id="email"
            type="text"
            className="validate"
            onChange={this.handleEmailChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input
            placeholder="*****"
            id="password"
            type="password"
            className="validate"
            onChange={this.handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn" onClick={ () => { this.simpleLogin() } }>Login</a>
        </div>
        <div className="row">
          <Link to="/Register" className="waves-effect waves-light btn">Register</Link>
        </div>
      </section>
    );
  }
}

export default Login;