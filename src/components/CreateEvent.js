import React from 'react';
import ReactDOM from 'react-dom';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');
var Datetime = require('react-datetime');

import '../../node_modules/react-datetime/css/react-datetime.css';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    //Init datapicker.js, part of Materalize
    //$('.datepicker').pickadate({
    //  formatSubmit: 'yyyy/mm/dd'
    //});
  };

  static defaultProps = {
  };

  static propTypes = {
  };

  state = {
    game: '',
    eventDate: ''
  };

  handleGameChange = (e) => {
    this.setState({game: e.target.value});
  };

  handleEventDateChange = (e) => {
    console.log(e.format("ddd, hA"));
      this.setState( {eventDate: e.format('ddd, hA')} )
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    var game = this.state.game;
    var date = this.state.eventDate;
    if(!game || !date) {
      return;
    }
    else {
      base.push(`gameEvents`, {
        data: { game: game, eventDate: date }
      });
    }

    this.setState({
      game: '',
      eventDate: ''
    })
  };

  render() {
    return (
      <section className="event">
        <h1>Add New Gaming Event</h1>
        <div className="row">
          <form onSubmit={ this.onSubmit } className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={ this.handleGameChange }
                  value={ this.state.game }
                  placeholder="Minecraft"
                  id="game"
                  type="text"
                  className="validate"
                />
                <label htmlFor="game">What Game?</label>
              </div>
              <div className="input-field col s12">
                <Datetime
                  onChange={ this.handleEventDateChange }
                  id="date"
                />
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CreateEvent;