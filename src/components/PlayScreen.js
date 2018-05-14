import React, { Component } from "react";
import HabitatView from "./HabitatView";
import PlayerHand from "./PlayerHand";
import DraftView from "./DraftView";
import GameStart from "./GameStart";
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
    computerHand: [],
    startGame: false,
    playerGo: true
  };

  componentDidMount() {
    this.getHabitats();
    this.getDraft();
  }

  componentDidUpdate(newProps, prevState) {
    if (prevState.playerHand.length === 5 && this.state.playerHand.length === 6)
      this.startGame();
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
    const fighters = fighterIndexes.map(index => fightersData[index]);
    this.setState({
      draftCardsSet1: fighters.filter((fighter, i) => i % 2 === 0),
      draftCardsSet2: fighters.filter((fighter, i) => i % 2 !== 0)
    });
  };

  addComputerCard = () => {
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
    const { playerHand, draftCardsSet1 } = this.state;
    this.addComputerCard();
    this.setState({
      playerHand: [...playerHand, this.state[set][card]]
    });
    this.removeDraftCard(set, card);
  };

  removeDraftCard = (set, card) => {
    this.setState({
      [set]: this.state[set].filter((item, i) => i !== card)
    });
  };

  startGame = () =>
    this.setState({
      startGame: true
    });

  changePlayer = () => {
    this.setState({
      playerGo: !this.state.playerGo
    });
  };

  render() {
    const {
      habitats,
      draftCardsSet1,
      draftCardsSet2,
      playerHand,
      computerHand
    } = this.state;
    return (
      <div id="playScreen">
        <HabitatView habitats={habitats} />
        {!this.state.startGame && (
          <DraftView
            draftCardsSet1={draftCardsSet1}
            draftCardsSet2={draftCardsSet2}
            addPlayerCard={this.addPlayerCard}
          />
        )}
        {this.state.startGame && (
          <GameStart
            playerHand={playerHand}
            computerHand={computerHand}
            changePlayer={this.changePlayer}
          />
        )}
        <PlayerHand playerHand={this.state.playerHand} />
        <Winner />
      </div>
    );
  }
}

export default PlayScreen;
