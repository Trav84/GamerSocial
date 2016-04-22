/**
 * Created by trav84 on 2/21/16.
 */
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
  componentDidMount = () => {
    base.bindToState('gameEvents', {
      context: this,
      state: 'gameEvents',
      asArray: true
    });
  };
  render() {
    return (
      <div className="row event-list">
        <GameCard
          items = { this.state.gameEvents }
        />
      </div>
    );
  }
}

export default EventList;