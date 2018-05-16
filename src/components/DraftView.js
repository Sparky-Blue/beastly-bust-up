import React, { Component } from "react";
import { PoseGroup } from "react-pose";
import "./DraftView.css";
import CardPose from "./CardPose";
import SliderPose from "./SliderPose";

class DraftView extends Component {
  state = { cardSet1: true };

  selectCard = index => {
    this.props.addPlayerCard(
      this.state.cardSet1 ? "draftCardsSet1" : "draftCardsSet2",
      index
    );

    this.setState({
      cardSet1: !this.state.cardSet1
    });
  };

  render() {
    const { cardSet1 } = this.state;
    return (
      <SliderPose className="cards" id={`draftCards${cardSet1 ? "1" : "2"}`}>
        <PoseGroup
          animateOnMount={true}
          preEnterPose={"exit"}
          enterPose={"enter"}
          exitPose={"exit"}
        >
          {this.props[cardSet1 ? "draftCardsSet1" : "draftCardsSet2"].map(
            (draft, i) => {
              return (
                <CardPose
                  className="fighters"
                  id={`draft${i}`}
                  key={draft.name}
                  onClick={() => this.selectCard(i)}
                >
                  <h3>{draft.name}</h3>
                  <p>{draft.rank}</p>
                  <p>{draft.habitat}</p>
                  <img src={draft.img} alt={draft.name} className="cardImg" />
                  {draft.traits.map((trait, i2) => <p key={i2}>{trait}</p>)}
                </CardPose>
              );
            }
          )}
        </PoseGroup>
      </SliderPose>
    );
  }
}

export default DraftView;
