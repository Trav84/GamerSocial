import React from 'react';
import ReactDOM from 'react-dom';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  };

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  handleSubmit = () => {
    // Create a user
    base.createUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    },  function(error, userData) {
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      }
      else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  };

  render() {
    return (
      <section className="register">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Bob Smith"
                  id="name"
                  type="text"
                  className="validate"
                  onChange={this.handleNameChange}
                />
                  <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handlePasswordChange}
                />
                  <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="bobsmith@gmail.com"
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleEmailChange}
                />
                  <label htmlFor="email">Email</label>
              </div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;