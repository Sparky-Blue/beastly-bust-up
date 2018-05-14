import React, { Component } from "react";
import FighterPose from "./FighterPose";

class Fighters extends Component {
  render() {
    const card = this.props.card;
    return (
      <FighterPose className="fighters">
        <h3>{card.name}</h3>
        <p>{card.habitat}</p>
        <img src={card.img} alt={card.name} className="cardImg" />
        {card.traits.map((trait, i) => <p key={i}>{trait}</p>)}
      </FighterPose>
    );
  }
}

export default Fighters;
