/**
 * Created by trav84 on 2/21/16.
 */
import React from 'react';


class Event extends React.Component {
  componentDidMount = () => {
    $('.datepicker').pickadate();
  };
  render() {
    return (
      <section className="event">
        <h1>Add New Gaming Event</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Minecraft" id="game" type="text" className="validate"/>
                  <label htmlFor="game">What Game?</label>
              </div>
              <div className="input-field col s12">
                <input id="date" type="date" className="validate datepicker"/>
                  <label htmlFor="date">When?</label>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Event;