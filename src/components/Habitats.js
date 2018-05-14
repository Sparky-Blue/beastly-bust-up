import React, { Component } from "react";
import "./Habitats.css";

class Habitats extends Component {
  render() {
    console.log(this.props.habitats);
    return (
      <div id="habitats">
        {this.props.habitats.map((habitat, i) => {
          return (
            <div
              className="habitatCard"
              id={`habitat${i}`}
              key={i}
              onClick={() => this.props.handleClick("habitat", i)}
            >
              <p>
                {habitat.points} {habitat.name}
              </p>
              <img
                src={habitat.img}
                alt={habitat.name}
                className="habitatImg"
              />
              <div>{habitat.cards.map(card => <p>{card.name}</p>)}</div>
              <div>{habitat.computerCards.map(card => <p>{card.name}</p>)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Habitats;
