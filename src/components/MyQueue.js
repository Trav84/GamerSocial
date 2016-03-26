/**
 * Created by trav84 on 2/21/16.
 */
import React from 'react';
import './my-queue.scss';

class MyQueue extends React.Component {
  render() {
    return (
      <section className="my-queue">
        <div className="games-today">
          <h2>Games Today</h2>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><i className="material-icons">stars</i>
                Minecraft
                <span className="game-date-header">8:00 PM</span>
              </div>
              <div className="collapsible-body">
                <div className="details">
                  <p>Server Name/IP: Frank's MC Server</p>
                  <p>Server Password: Frankyfrank</p>
                </div>
                <div className="gamers">
                  <div className="chip">
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                    Jane Doe
                  </div>
                  <div className="chip">
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                    Jane Doe
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="games-this-week">
          <h2>Games This Week</h2>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><i className="material-icons">stars</i>
                Minecraft
                <span className="game-date-header">Wednesday</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">stars</i>
                Civilization 5
                <span className="game-date-header">Friday</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons"></i>
                Don't Starve
                <span className="game-date-header">Sunday</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
          </ul>
        </div>
        <div className="games-future">
          <h2>Future Games</h2>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><i className="material-icons">stars</i>
                Minecraft
                <span className="game-date-header">4/5/2016</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">stars</i>
                Civilization 5
                <span className="game-date-header">4/15/2016</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons"></i>
                Don't Starve
                <span className="game-date-header">4/17/2016</span>
              </div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
          </ul>
        </div>

      </section>
    );
  }
}

export default MyQueue;