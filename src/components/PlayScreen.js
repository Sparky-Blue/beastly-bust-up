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
    draftCardsSet1: [],
    draftCardsSet2: [],
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
    const fighterIndexes = getRandomCards(12, fightersData.length);
    console.log(fighterIndexes);
    const fighters = fighterIndexes.map(index => fightersData[index]);
    this.setState({
      draftCardsSet1: fighters.filter((fighter, i) => i % 2 === 0),
      draftCardsSet2: fighters.filter((fighter, i) => i % 2 !== 0)
    });
  };

  addComputerCard = () => {
    console.log(this.state.draftCardsSet2);
    const { computerHand } = this.state;
    const set = computerHand.length % 2 ? "draftCardsSet1" : "draftCardsSet2";
    const card = this.state[set].reduce((prev, current, i) => {
      return this.state[set][prev].rank > current.rank ? prev : i;
    }, 0);
    this.setState({
      computerHand: [...computerHand, this.state[set][card]]
    });
    this.removeDraftCard(set, card);
  };

  addPlayerCard = (set, card) => {
    this.addComputerCard();
    this.setState({
      playerHand: [...this.state.playerHand, this.state[set][card]]
    });
    this.removeDraftCard(set, card);
  };

  removeDraftCard = (set, card) => {
    this.setState({
      [set]: this.state[set].filter((item, i) => i !== card)
    });
  };

  render() {
    const { habitats, draftCardsSet1, draftCardsSet2 } = this.state;
    return (
      <div id="playScreen">
        <HabitatView habitats={habitats} />
        <DraftView
          draftCardsSet1={draftCardsSet1}
          draftCardsSet2={draftCardsSet2}
          addPlayerCard={this.addPlayerCard}
        />
        <PlayerHand playerHand={this.state.playerHand} />
        <Winner />
      </div>
    );
  }
}

export default PlayScreen;
