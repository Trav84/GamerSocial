import React from 'react';
import ReactDOM from 'react-dom';

class CreateEvent extends React.Component {
  static defaultProps = {
  };

  static propTypes = {
  };

  state = {
    game: '',
    eventDate: ''
  };

  componentDidMount = () => {
    //Init datapicker.js, part of Materalize
    //$('.datepicker').pickadate({
    //  formatSubmit: 'yyyy/mm/dd'
    //});
  };

  handleGameChange = (e) => {
    this.setState({game: e.target.value});
  };

  handleEventDateChange = (e) => {
      this.setState({eventDate: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    var game = this.state.game;
    var date = this.state.eventDate;
    if(!game || !date) {
      return;
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
                <input
                  value={ this.state.eventDate }
                  onChange={ this.handleEventDateChange }
                  id="date"
                  type="date"
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