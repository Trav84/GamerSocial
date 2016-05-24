import React from 'react';
import './event-list.scss';

import GameCard from './GameCard';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

class EventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameEvents: []
    }
  }
  componentDidMount() {
   this.ref = base.bindToState('gameEvents', {
      context: this,
      state: 'gameEvents',
      asArray: true
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    return (
      <section className="row event-list">
        <GameCard
          items = { this.state.gameEvents }
        />
      </section>
    );
  }
}

export default EventList;