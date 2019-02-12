import React, { Component } from "react";
import "./App.css";
import axios from "axios"; // const axios = require('axios');

// Le cycle de vie (lifecycle) d'un composant
// - constructor, render, component did mount

class App extends Component {
  state = {
    rooms: []
  };

  // 1 seule fois
  componentDidMount = async () => {
    console.log("component did mount");
    // On charge les données ici
    const response = await axios.get(
      "https://airbnb-api.now.sh/api/room?city=paris"
    );

    // Un nouveau render sera déclenché
    this.setState({
      rooms: response.data.rooms
    });
  };

  renderRooms() {
    if (this.state.rooms.length > 0) {
      return (
        <ul>
          {this.state.rooms.map(room => {
            return <li key={room._id}>{room.title}</li>;
          })}
        </ul>
      );
    } else {
      return <span>page en cours de chargement ...</span>;
    }
  }

  // X fois
  render() {
    console.log("RENDER");
    return (
      <div>
        <h1>Liste d'appartements</h1>
        {this.renderRooms()}
      </div>
    );
  }
}

export default App;
