import React, { Component } from "react";

class Fighters extends Component {
  render() {
    const card = this.props.card;
    return (
      <div className="fighters">
        <h3>{card.name}</h3>
        <p>{card.habitat}</p>
        <img src={card.img} alt={card.name} className="cardImg" />
        {card.traits.map((trait, i) => <p key={i}>{trait}</p>)}
      </div>
    );
  }
}

export default Fighters;
