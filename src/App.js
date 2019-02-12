import React, { Component } from "react";
import Allocine from "./Allocine";
import Upcoming from "./components/Upcoming";
import "./App.css";
import Popular from "./components/Popular";
import Top from "./components/Top";

class App extends Component {
  state = {
    categorie: "Upcoming"
  };

  clickTop = () => {
    this.setState(state => (state.categorie = "Top"));
  };

  clickUpcoming = () => {
    this.setState(state => (state.categorie = "Upcoming"));
  };

  clickPopular = () => {
    this.setState(state => (state.categorie = "Popular"));
  };

  changeCategorie = () => {
    if (this.state.categorie === "Popular") {
      return <Popular />;
    } else if (this.state.categorie === "Top") {
      return <Top />;
    } else if (this.state.categorie === "Upcoming") {
      return <Upcoming />;
    }
  };

  render() {
    return (
      <div className="backgrounds">
        <Allocine />
        <div className="groupCenter">
          <div className="btnGroup">
            <button className="btn" onClick={this.clickPopular}>
              Popular Movies
            </button>
            <button className="btn" onClick={this.clickUpcoming}>
              Upcoming Movies
            </button>
            <button className="btn" onClick={this.clickTop}>
              Top Rated Movies
            </button>
          </div>
          {this.changeCategorie()}
        </div>
      </div>
    );
  }
}

export default App;
