import React, { Component } from "react";
import FighterPose from "./FighterPose";
import cloudinary from "cloudinary-core";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "beastlyb" });

class Fighters extends Component {
  render() {
    const card = this.props.card;
    return (
      <img
        src={cloudinaryCore.url(`${card.name}.png`)}
        alt={card.name}
        className="cardImg"
      />
    );
  }
}
export default Fighters;
