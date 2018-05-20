import React, { Component } from "react";
import Fighters from "./Fighters";
import { PoseGroup } from "react-pose";
import FighterPose from "./FighterPose";
import "./Hand.css";
import BlankPose from "./BlankPose";
import cloudinary from "cloudinary-core";
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "beastlyb" });

class Hand extends Component {
  state = {
    selectedCard: null
  };

  render() {
    return (
      <div className="cards" id={this.props.title}>
        <PoseGroup
          animateOnMount={true}
          preEnterPose={"exit"}
          enterPose={"enter"}
        >
          {this.props.hand.map((card, i) => {
            return card === null ? (
              <BlankPose className="fighters blank" key={i} />
            ) : (
              <FighterPose
                className={
                  this.props.selectedCard === i
                    ? "fighters selected"
                    : "fighters"
                }
                key={card.name}
                id={card.name}
                onClick={
                  this.props.playerGo
                    ? () => this.props.handleClick(this.props.title, i)
                    : null
                }
              >
                {this.props.title === "playerHand" ? (
                  <Fighters card={card} />
                ) : (
                  <div>
                    <img
                      src={cloudinaryCore.url(`Background.png`)}
                      alt="card back design"
                    />
                  </div>
                )}
              </FighterPose>
            );
          })}
        </PoseGroup>
      </div>
    );
  }
}

export default Hand;
