import React, { Component, Fragment } from "react";
import Fighters from "./Fighters";
import { PoseGroup } from "react-pose";
import FighterPose from "./FighterPose";
import "./Hand.css";
import BlankPose from "./BlankPose";

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
                onClick={
                  this.props.playerGo
                    ? () => this.props.handleClick(this.props.title, i)
                    : null
                }
              >
                {this.props.title === "playerHand" ? (
                  <Fragment>
                    <h3>{card.name}</h3>
                    <p>{card.rank}</p>
                    <p>{card.habitat}</p>
                    <img src={card.img} alt={card.name} className="cardImg" />
                    {card.traits.map((trait, i) => <p key={i}>{trait}</p>)}
                  </Fragment>
                ) : (
                  <div />
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
