import React, { Component } from "react";
import { PoseGroup } from "react-pose";
import "./DraftView.css";
import FighterPose from "./FighterPose";
import SliderPose from "./SliderPose";
import Fighters from "./Fighters";

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
                <FighterPose
                  className="fighters"
                  id={`draft${i}`}
                  key={draft.name}
                  onClick={() => this.selectCard(i)}
                >
                  <Fighters card={draft} />
                </FighterPose>
              );
            }
          )}
        </PoseGroup>
      </SliderPose>
    );
  }
}

export default DraftView;
