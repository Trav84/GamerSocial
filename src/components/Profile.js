import React from 'react';
import ReactDOM from 'react-dom';

var Rebase = require('re-base');
var base = Rebase.createClass('https://gamerhub.firebaseio.com/');

class Profile extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount = () => {
    var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=E82CE9E0D829FA87225B9D6777A8688F&steamid=76561197960434622&format=json';
    this.serverRequest = $.get(url, function (result) {
      console.log(result);
    });
  };

  render() {
    return (
      <section className="profile">

      </section>
    );
  }
}

export default Profile;