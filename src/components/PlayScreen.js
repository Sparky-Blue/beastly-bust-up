import React, { Component } from "react";
import HabitatView from "./HabitatView";
import PlayerHand from "./PlayerHand";
import DraftView from "./DraftView";
import Winner from "./Winner";
import habitatsData from "../cardsData/habitats";
import fightersData from "../cardsData/fighters";
import { getRandomCards } from "../utils";

class PlayScreen extends Component {
  state = {
    habitats: [],
    draftCards: { set1: [], set2: [] },
    playerHand: [],
    computerHand: []
  };

  componentDidMount() {
    this.getHabitats();
    this.getDraft();
  }

  getHabitats = () => {
    const habitatIndexes = getRandomCards(4, habitatsData.length);
    this.setState({
      habitats: habitatIndexes.map(index => {
        return habitatsData[index];
      })
    });
  };

  getDraft = () => {
    const fighterIndexes1 = getRandomCards(6, fightersData.length);
    const fighterIndexes2 = getRandomCards(6, fightersData.length);
    this.setState({
      draftCards: {
        set1: fighterIndexes1.map(index => fightersData[index]),
        set2: fighterIndexes1.map(index => fightersData[index])
      }
    });
  };

  render() {
    const { habitats, draftCards } = this.state;
    console.log(draftCards);
    return (
      <div id="playScreen">
        <HabitatView habitats={habitats} />
        <DraftView draftCards={draftCards} />
        <PlayerHand />
        <Winner />
      </div>
    );
  }
}

export default PlayScreen;
