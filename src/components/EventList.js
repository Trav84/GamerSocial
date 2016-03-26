/**
 * Created by trav84 on 2/21/16.
 */
import React from 'react';
import './event-list.scss';

class EventList extends React.Component {
  render() {
    return (
      <div className="row event-list">
        <div className="col s12 m4">
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
              <div className="chip">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                Jane Doe
              </div>
              <div className="chip">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/13/9/campaign_images/webdr06/31-things-you-have-to-deal-with-as-the-only-black-2-3779-1402667423-0_big.jpg" alt="Contact Person"/>
                Jane Doe
              </div>
              <i className="material-icons right add-icon">queue</i>
            </div>
            <div className="card-action">
              <a href="#">Minecraft - Today!</a>
              <i className="material-icons right add-icon">queue</i>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img className="activator" src="http://i1-news.softpedia-static.com/images/news2/Don-039-t-Starve-Review-2.jpg"/>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className="card-action">
              <a href="#">Dont Starve - 2 Days</a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img className="activator" src="https://upload.wikimedia.org/wikipedia/en/5/5c/CIVILIZATION-V-FRONT-OF-BOX.jpg"/>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className="card-action">
              <a href="#">Civilization 5 - 4/2/16</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;