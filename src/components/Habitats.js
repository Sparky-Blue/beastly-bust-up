import React, { Component } from "react";
import "./Habitats.css";

class Habitats extends Component {
  render() {
    return (
      <div id="habitats">
        {this.props.habitats.map((habitat, i) => {
          return (
            <div className="habitatCard" id={`habitat${i}`} key={i}>
              <h3>{habitat.name}</h3>
              <p>{habitat.points}</p>
              <img
                src={habitat.img}
                alt={habitat.name}
                className="habitatImg"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Habitats;
