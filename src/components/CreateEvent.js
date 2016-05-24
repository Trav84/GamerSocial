import React from 'react';
import ReactDOM from 'react-dom';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');
var Datetime = require('react-datetime');
var Select = require('react-select');

import "../../node_modules/react-select/dist/react-select.min.css";
import '../../node_modules/react-datetime/css/react-datetime.css';

//TODO: Put this in database
var options = [
  { value: 'Minecraft', label: 'Minecraft' },
  { value: 'Team Fortress 2', label: 'Team Fortress 2' },
  { value: 'Civilization 5', label: 'Civilization 5' }
];

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    game: '',
    eventDate: ''
  };

  handleGameChange = (e) => {
    console.log(e.value);
    this.setState({game: e.value});
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
              <Select
                onChange={ this.handleGameChange }
                placeholder="Minecraft"
                id="game"
                type="text"
                className="validate"
                options={options}
              />
              <div className="input-field col s12">

                <label className="active" htmlFor="game">What Game?</label>
              </div>
              <div className="input-field col s12">
                <Datetime
                  onChange={ this.handleEventDateChange }
                  id="date"
                  placeholder="FRI, 8 PM"
                />
                <label className="active" htmlFor="game">What Time?</label>
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