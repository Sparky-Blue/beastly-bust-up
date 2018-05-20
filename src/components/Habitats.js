import React, { Component } from "react";
import "./Habitats.css";
import cloudinary from "cloudinary-core";
// import { Image } from "cloudinary-react";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "beastlyb" });

class Habitats extends Component {
  render() {
    const {
      habitats,
      handleClick,
      playedTraits,
      active,
      currentHabitat
    } = this.props;
    return (
      <div id="habitats">
        {habitats.map((habitat, hi) => {
          return (
            <div className="habitatCard" id={`habitat${hi}`} key={habitat.name}>
              <div className="fighterInHabitat">
                {habitat.computerCards.map((card, ci) => (
                  <img
                    src={cloudinaryCore.url(`${card.name}.png`)}
                    alt={card.name}
                    className="fighterInHabitatImg"
                    onClick={
                      playedTraits && currentHabitat.name === habitat.name
                        ? () => handleClick("chooseFighter", ci, hi)
                        : null
                    }
                  />
                ))}
              </div>
              <img
                src={cloudinaryCore.url(`${habitat.img}`)}
                alt={habitat.name}
                className="habitatImg"
                onClick={
                  playedTraits
                    ? () => handleClick("bounceHabitat", hi)
                    : active
                      ? () => handleClick("habitat", hi)
                      : null
                }
              />
              <div className="fighterInHabitat">
                {habitat.cards.map((card, pi) => (
                  <img
                    src={cloudinaryCore.url(`${card.name}.png`)}
                    alt={card.name}
                    className="fighterInHabitatImg"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Habitats;
