/**
 * Created by trav84 on 2/21/16.
 */
import React from 'react';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

class GameCard extends React.Component {
  handleAddGameToQueue = (key) => {
    console.log('Game added to your queue');
    base.push('gameEvents/' +key , {
      gamers: { name: "Travis" }
    });
  };
  componentDidMount = () => {

  };
  render() {
    var games = this.props.items.map((item, index) => {
      return (
        <div className="col s12 m4" key = { index }>
          <div className="card">
            <div className="card-image">
              <img className="activator" src="https://lh6.googleusercontent.com/-3XfQIrMuPcU/AAAAAAAAAAI/AAAAAAAAAZ8/lFyWhaRInZg/photo.jpg"/>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Gamers<i className="material-icons right close-icon">close</i></span>
              <div className="chip">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                Jane Doe
              </div>
              <div className="chip">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                Jane Doe
              </div>
              <i className="material-icons right add-icon" onClick = { this.handleAddGameToQueue.bind(this, item.key) }>queue</i>
            </div>
            <div className="card-action">
              <a href="#">{ item.game } - { item.eventDate }</a>
              <i className="material-icons right add-icon" onClick = { this.handleAddGameToQueue.bind(this, item.key) }>queue</i>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        { games }
      </div>
    );
  }
}

export default GameCard;