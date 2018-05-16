import React, { Component } from "react";
import "./Habitats.css";
import cloudinary from "cloudinary-core";
import { Image } from "cloudinary-react";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "beastlyb" });
// const SampleImg = () => (
//   <img src={cloudinaryCore.url('sample')} />
// );

class Habitats extends Component {
  render() {
    return (
      <div id="habitats">
        {this.props.habitats.map((habitat, i) => {
          console.log(habitat.img);
          return (
            <div
              className="habitatCard"
              id={`habitat${i}`}
              key={habitat.name}
              onClick={() => this.props.handleClick("habitat", i)}
            >
              <div className="fighterInHabitat">
                {habitat.computerCards.map((card, i) => (
                  <p key={i}>{card.name}</p>
                ))}
              </div>
              <img
                src={cloudinaryCore.url(`${habitat.img}`)}
                className="habitatImg"
              />
              <div className="fighterInHabitat">
                {habitat.cards.map((card, i1) => <p key={i1}>{card.name}</p>)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Habitats;
