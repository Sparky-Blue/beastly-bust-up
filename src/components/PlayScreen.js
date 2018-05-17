import React, { Component } from "react";
import HabitatView from "./HabitatView";
import Hand from "./Hand";
import DraftView from "./DraftView";
import GameStart from "./GameStart";
import Winner from "./Winner";
import TraitMessage from "./TraitMessage";
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
    chooseHabitat: false,
    selectedCard: null,
    bounceHabitat: null,
    traitActionCard: null,
    currentTrait: null
  };

  componentDidMount() {
    this.getHabitats();
    this.getDraft();
  }

  componentDidUpdate(newProps, prevState) {
    if (prevState.playerHand.length === 5 && this.state.playerHand.length === 6)
      this.startScreenActivate();
    if (
      prevState.playerGo === true &&
      this.state.playerGo === false &&
      this.state.activePlay === true
    ) {
      this.computerMove();
      return;
    }
    if (
      prevState.activePlay === false &&
      this.state.activePlay === true &&
      this.state.playerGo === false
    )
      this.computerMove();
    if (
      prevState.bounceHabitat === null &&
      this.state.bounceHabitat !== null &&
      this.state.currentTrait === "H"
    ) {
      this.bounceCard(this.state.traitActionCard, this.state.bounceHabitat);
    }
    if (prevState.currentTrait !== null && this.state.currentTrait === null) {
      this.checkTraits({ traits: [...this.state.traitsList] });
    }
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

  handleClick = (name, value, habitat) => {
    if (name === "playerHand") {
      this.selectFighter(value);
    }

    if (name === "habitat") {
      this.selectHabitat(value);
    }

    if (name === "chooseFighter") {
      const fighter = { ...this.state.habitats[habitat].computerCards[value] };

      if (this.state.currentTrait === "H") {
        this.setState({
          traitActionCard: fighter
        });
      }
      this.trashCard(value, habitat);
    }

    if (name === "bounceHabitat") {
      this.setState({
        bounceHabitat: value
      });
    }

    if (name === "Q") {
      value === "n" ? this.endPlayedTraits() : this.playQuickGo();
    }

    if (name === "FH") {
      value === "trash"
        ? this.setState({ currentTrait: "F" })
        : this.setState({ currentTrait: "H" });
    }
  };

  selectFighter = index => {
    this.setState({
      selectedCard: index
    });
  };

  selectHabitat = index => {
    const card = this.state.playerHand[this.state.selectedCard];
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (index === i) habitat.cards.push(card);
        return habitat;
      }),
      playerHand: this.state.playerHand.map(
        (item, i) => (i !== this.state.selectedCard ? item : null)
      ),
      selectedCard: null,
      traitsList: [...card.traits]
    });
    this.checkTraits(card);
  };

  endPlayedTraits = () => this.setState({ currentTrait: null, traitsList: [] });

  checkTraits = card => {
    if (!this.state.playerGo) {
      this.changePlayer();
      return;
    }
    const { traits } = card;
    if (traits.includes("FIERCE") && traits.includes("HEFTY")) {
      this.setCurrentTrait("FH");
      return;
    }
    if (traits.includes("FIERCE")) {
      this.setCurrentTrait("F");
      return;
    }
    if (traits.includes("HEFTY")) {
      this.setCurrentTrait("H");
      return;
    }
    if (traits.includes("QUICK")) {
      this.setCurrentTrait("Q");
      return;
    }
    this.changePlayer();
  };

  setCurrentTrait = type => {
    this.setState({
      currentTrait: type
    });
  };

  computerMove = () => {
    const { computerHand } = this.state;
    const habitatIndex = Math.floor(Math.random() * 3);
    const index = computerHand.reduce((acc, card, i) => {
      if (card !== null) acc = i;
      return acc;
    }, -1);
    if (index === -1) return;
    const card = computerHand[index];
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (habitatIndex === i) habitat.computerCards.push(card);
        return habitat;
      }),
      computerHand: this.state.computerHand.map(
        (item, i) => (i !== index ? item : null)
      ),
      traitsList: card.traits
    });
    this.checkTraits(card);
  };

  setCurrentTrait = currentTrait => {
    this.setState({
      currentTrait
    });
  };

  trashCard = (cardIndex, habitatIndex) => {
    const newHabitats = this.state.habitats.reduce((acc, habitat, i) => {
      if (i === habitatIndex) {
        habitat.computerCards = habitat.computerCards.filter(
          (fighter, it) => cardIndex !== it
        );
      }
      acc.push(habitat);
      return acc;
    }, []);
    this.setState({
      habitats: newHabitats,
      currentTrait: null,
      traitsList: this.state.traitsList.filter(trait => trait !== "FIERCE")
    });
  };

  bounceCard = (card, newHab) => {
    const newHabitats = this.state.habitats.reduce((acc, habitat, i) => {
      if (i === newHab) {
        habitat.computerCards = [...habitat.computerCards, card];
      }
      acc.push(habitat);
      return acc;
    }, []);
    this.setState({
      habitats: newHabitats,
      traitActionCard: null,
      bounceHabitat: null,
      currentTrait: null,
      traitsList: this.state.traitsList.filter(trait => trait !== "HEFTY")
    });
  };

  playQuickGo = () => {
    this.endPlayedTraits();
  };

  render() {
    const {
      habitats,
      draftCardsSet1,
      draftCardsSet2,
      playerHand,
      computerHand,
      playerGo,
      selectedCard,
      playedTraits
    } = this.state;
    return (
      <div id="playScreen">
        {this.state.activePlay && (
          <Hand hand={this.state.computerHand} title="computerHand" />
        )}
        <HabitatView
          habitats={habitats}
          handleClick={this.handleClick}
          playedTraits={this.state.currentTrait ? true : false}
          active={selectedCard === null ? false : true}
        />
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
        {this.state.currentTrait && (
          <TraitMessage
            action={this.state.currentTrait}
            handleClick={this.handleClick}
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
