import React, { Component } from "react";
import HabitatView from "./HabitatView";
import Hand from "./Hand";
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
    startScreen: false,
    drafting: true,
    activePlay: false,
    playerGo: true,
    habitatPlayerCards: [],
    habitatComputerCards: []
  };

  componentDidMount() {
    this.getHabitats();
    this.getDraft();
  }

  componentDidUpdate(newProps, prevState) {
    if (prevState.playerHand.length === 5 && this.state.playerHand.length === 6)
      this.startScreenActivate();
    if (prevState.playerGo === true && this.state.playerGo === false)
      this.computerMove();
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

  startScreenActivate = () =>
    this.setState({
      drafting: false,
      startScreen: true
    });

  startGame = () =>
    this.setState({
      startScreen: false,
      activePlay: true
    });

  changePlayer = () => {
    this.setState({
      playerGo: !this.state.playerGo
    });
  };

  handleClick = (name, card) => {
    if (name === "playerHand") {
      this.selectFighter(card);
    }

    if (name === "habitat") {
      this.selectHabitat(card);
    }
  };

  selectFighter = card => {
    this.setState({
      selectedCard: card
    });
  };

  selectHabitat = index => {
    const card = this.state.playerHand[index];
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (index === i) habitat.cards.push(card);
        return habitat;
      }),
      playerHand: this.state.playerHand.filter((item, i) => i !== index)
    });
    this.checkTraits(card);
  };

  checkTraits = card => {
    console.log(card.traits);
    if (card.traits.includes("FIERCE")) {
    }
    if (card.traits.includes("HEFTY")) {
    }
    if (card.traits.includes("QUICK")) {
    }
    this.changePlayer();
  };

  computerMove = () => {
    const { computerHand, playerHand } = this.state;
    const card = computerHand[0];
    const index = 0;
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (index === i) habitat.computerCards.push(card);
        return habitat;
      }),
      computerHand: this.state.computerHand.filter((item, i) => i !== 0)
    });
    this.checkTraits(card);
  };

  playerMove = () => {
    this.state.computerHand;
  };

  render() {
    const {
      habitats,
      draftCardsSet1,
      draftCardsSet2,
      playerHand,
      computerHand,
      playerGo,
      selectedCard
    } = this.state;
    return (
      <div id="playScreen">
        {this.state.activePlay && (
          <Hand hand={this.state.computerHand} title="computerHand" />
        )}
        <HabitatView habitats={habitats} handleClick={this.handleClick} />
        {this.state.drafting && (
          <DraftView
            draftCardsSet1={draftCardsSet1}
            draftCardsSet2={draftCardsSet2}
            addPlayerCard={this.addPlayerCard}
          />
        )}
        {this.state.startScreen && (
          <GameStart
            playerHand={playerHand}
            computerHand={computerHand}
            changePlayer={this.changePlayer}
            startGame={this.startGame}
          />
        )}
        <Hand
          hand={this.state.playerHand}
          title="playerHand"
          playerGo={playerGo}
          handleClick={this.handleClick}
          selectedCard={selectedCard}
        />
        <Winner />
      </div>
    );
  }
}

export default PlayScreen;
