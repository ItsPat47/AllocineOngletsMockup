import React, { Component } from "react";
import "./components/menu.css";

class Allocine extends Component {
  render() {
    return (
      <div className="menu">
        <div className="logoAllocine">
          <img
            className="logo"
            src={require("./img/logo.png")}
            alt="logoAllocine"
          />
        </div>
      </div>
    );
  }
}

export default Allocine;
