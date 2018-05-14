import React, { Component } from "react";
import Fighters from "./Fighters";
import { PoseGroup } from "react-pose";
import FighterPose from "./FighterPose";
import "./PlayerHand.css";

class PlayerHand extends Component {
  render() {
    return (
      <div id="playerHand">
        <PoseGroup
          animateOnMount={true}
          preEnterPose={"exit"}
          enterPose={"enter"}
        >
          {this.props.playerHand.map((card, i) => {
            return (
              <FighterPose className="fighters" key={card.id}>
                <h3>{card.name}</h3>
                <p>{card.habitat}</p>
                <img src={card.img} alt={card.name} className="cardImg" />
                {card.traits.map((trait, i) => <p key={i}>{trait}</p>)}
              </FighterPose>
            );
          })}
        </PoseGroup>
      </div>
    );
  }
}

export default PlayerHand;
