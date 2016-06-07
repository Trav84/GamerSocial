import React from 'react';
import ReactDOM from 'react-dom';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

class Login extends React.Component {
  constructor(props) {
    super(props);
  };

  login(){

  };

  render() {
    return (
      <section className="register">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                  <label htmlFor="disabled">Disabled</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;