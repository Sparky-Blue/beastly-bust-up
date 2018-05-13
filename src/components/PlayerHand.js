import React, { Component } from "react";
import Fighters from "./Fighters";
import "./PlayerHand.css";

class PlayerHand extends Component {
  render() {
    return (
      <div id="playerHand">
        {this.props.playerHand.map((card, i) => {
          return <Fighters card={card} key={i} />;
        })}
      </div>
    );
  }
}

export default PlayerHand;
