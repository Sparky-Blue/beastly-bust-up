import React, { Component } from "react";
import { PoseGroup } from "react-pose";
import "./DraftView.css";
import CardPose from "./CardPose";
import SliderPose from "./SliderPose";

class DraftView extends Component {
  state = { draftCards: [true, true, true, true, true, true] };

  selectCard = index => {
    const { draftCards } = this.state;
    this.setState({
      draftCards: draftCards.map((card, i) => {
        if (i === index) return false;
        return card;
      })
    });
    this.props.addPlayerCard("set1", index);
  };

  render() {
    return (
      <SliderPose id="draftCards">
        {this.props.draftCards.set1.map((draft, i) => {
          return (
            <CardPose
              className="draftCard"
              id={`draft${i}`}
              key={i}
              pose={this.state.draftCards[i] ? "start" : "inHand"}
              onClick={() => this.selectCard(i)}
            >
              <h3>{draft.name}</h3>
              <p>{draft.habitat}</p>
              <img src={draft.img} alt={draft.name} className="draftImg" />
              {draft.traits.map((trait, i2) => <p key={i2}>{trait}</p>)}
            </CardPose>
          );
        })}
      </SliderPose>
    );
  }
}

export default DraftView;
