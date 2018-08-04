import React, { Component } from "react";
import HabitatView from "./HabitatView";
import Hand from "./Hand";
import DraftView from "./DraftView";
import GameStart from "./GameStart";
import Message from "./Message";
import Result from "./Result";
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
    stage: "drafting",
    playerGo: true,
    currentHabitat: null,
    selectedCard: null,
    bounceHabitat: null,
    traitActionCard: null,
    currentTrait: null,
    showMessage: null,
    secondQuickCard: false
  };

  componentDidMount() {
    this.getHabitats();
    this.getDraft();
  }

  componentDidUpdate(newProps, prevState) {
    if (prevState.playerHand.length === 5 && this.state.playerHand.length === 6)
      this.changeStage("startScreen");

    if (
      this.state.stage === "activePlay" &&
      this.state.playerGo === false &&
      (prevState.playerGo === true || prevState.stage !== "activePlay")
    )
      this.computerMove();
    // if (
    //   prevState.bounceHabitat === null &&
    //   this.state.bounceHabitat !== null &&
    //   this.state.currentTrait === "H"
    // ) {
    //   this.bounceCard(this.state.traitActionCard, this.state.bounceHabitat);
    // }

    if (this.state.playerGo !== prevState.playerGo) {
      this.checkGameEnd();
    }
  }

  changeStage = stage => {
    this.setState({
      stage
    });
  };

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
    const { playerHand } = this.state;
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

  changePlayer = () => {
    this.setState({
      playerGo: !this.state.playerGo
    });
  };

  checkGameEnd = () => {
    const hand1 = this.state.playerHand.reduce((acc, card) => {
      if (card !== null) acc = false;
      return acc;
    }, true);
    hand1 && this.changeStage("result");
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
    }

    if (name === "bounceHabitat") {
      this.setState({
        bounceHabitat: value
      });
      this.bounceCard(this.state.traitActionCard);
    }

    if (name === "restartGo") {
      this.setState({
        showMessage: null
      });
    }

    if (name === "Q") {
      value === "n"
        ? this.setState({
            currentTrait: null,
            traitsList: [],
            selectedCard: null,
            currentHabitat: null
          })
        : this.playQuickGo();
    }

    if (name === "FH") {
      value === "trash"
        ? this.setState({ currentTrait: "F" })
        : this.setState({ currentTrait: "H" });
    }

    if (name === "restart") {
      this.props.newGame();
    }
  };

  selectFighter = index => {
    this.setState({
      selectedCard: index
    });
  };

  selectHabitat = index => {
    const card = this.state.playerHand[this.state.selectedCard];
    const habitat = { ...this.state.habitats[index] };
    const legalMove = this.checkHabitatSize(card, habitat);
    if (!legalMove) {
      this.setState({
        showMessage: "Habitat already full",
        selectedCard: null
      });
      return;
    }
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (index === i) habitat.cards.push(card);
        return habitat;
      }),
      playerHand: this.state.playerHand.map(
        (item, i) => (i !== this.state.selectedCard ? item : null)
      ),
      selectedCard: null,
      currentHabitat: habitat,
      traitsList: [...card.traits]
    });
    this.checkTraits(card, habitat);
  };

  checkTraits = (
    card = { traits: [...this.state.traitsList] },
    habitat = this.state.currentHabitat
  ) => {
    if (!this.state.playerGo) {
      this.changePlayer();
      return;
    }
    const { traits } = card;
    const { computerCards } = habitat;
    if (computerCards.length !== 0) {
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
    }
    if (traits.includes("QUICK") && this.state.secondQuickCard !== null) {
      this.setCurrentTrait("Q");
      return;
    }
    this.setState({
      secondQuickCard: false
    });
    // this.changePlayer();
  };

  setCurrentTrait = type => {
    this.setState({
      currentTrait: type
    });
  };

  computerMove = () => {
    const { computerHand, habitats } = this.state;
    const index = computerHand.reduce((acc, card, i) => {
      if (card !== null) acc = i;
      return acc;
    }, -1);
    if (index === -1) return;
    const card = computerHand[index];
    const habitatIndex = habitats.reduce((acc, habitat, i) => {
      if (
        habitat.computerCards.length + habitat.cards.length >= 4 &&
        habitat.name !== card.habitat
      )
        return acc;
      acc = i;
      return acc;
    }, 0);
    const habitat = habitats[habitatIndex];
    this.setState({
      habitats: this.state.habitats.map((habitat, i) => {
        if (habitatIndex === i) habitat.computerCards.push(card);
        return habitat;
      }),
      computerHand: this.state.computerHand.map(
        (item, i) => (i !== index ? item : null)
      )
    });
    this.checkTraits(card, habitat);
  };

  trashCard = (cardIndex, habitatIndex) => {
    const habitat = this.state.habitats[habitatIndex];
    const card = habitat.computerCards[cardIndex];
    const newHabitats = this.state.habitats.reduce((acc, habitat, i) => {
      if (i === habitatIndex) {
        habitat.computerCards = habitat.computerCards.filter(
          (fighter, index) =>
            cardIndex !== index && !fighter.traits.includes("TOUGH")
        );
      }
      acc.push(habitat);
      return acc;
    }, []);
    // if (this.state.currentTrait === "H") {
    //   this.setState({
    //     habitats: [...newHabitats],
    //     showMessage: "Choose a habitat to bounce to"
    //   });
    //   return;
    // }
    this.setState({
      habitats: [...newHabitats],
      currentTrait: null,
      traitsList: this.state.traitsList.filter(trait => trait !== "FIERCE")
    });
    this.checkTraits(card, habitat);
  };

  bounceCard = card => {
    //when fighter is selected should prompt to choose habitat but not, should not call this function untill figher and habitat selected. crashing!
    const newHab = this.state.bounceHabitat;
    const { currentHabitat } = this.state;
    const newHabitats = this.state.habitats.reduce((acc, habitat, i) => {
      if (habitat.name === currentHabitat.name) {
        habitat.computerCards = habitat.computerCards.filter(
          fighter =>
            card.name !== fighter.name && !fighter.traits.includes("AGILE")
        );
        if (i === newHab) {
          habitat.computerCards = [...habitat.computerCards, card];
        }
      }
      acc.push(habitat);
      return acc;
    }, []);
    this.setState({
      habitats: [...newHabitats],
      traitActionCard: null,
      bounceHabitat: null,
      currentTrait: null,
      traitsList: this.state.traitsList.filter(trait => trait !== "HEFTY")
    });
    this.checkTraits(card);
  };

  playQuickGo = () => {
    this.setState({
      showMessage: "Please choose another card",
      secondQuickCard: true,
      selectedCard: null,
      currentHabitat: null,
      currentTrait: null,
      playerGo: true,
      traitsList: []
    });
  };

  checkHabitatSize = (fighter, habitat) => {
    if (habitat.name === fighter.habitat) return true;
    if (habitat.computerCards.length + habitat.cards.length >= 4) return false;
    return true;
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
      currentHabitat
    } = this.state;
    return (
      <div id="playScreen">
        {this.state.stage === "activePlay" && (
          <Hand hand={this.state.computerHand} title="computerHand" />
        )}
        <HabitatView
          habitats={habitats}
          handleClick={this.handleClick}
          playedTraits={this.state.currentTrait ? true : false}
          active={selectedCard === null ? false : true}
          currentHabitat={currentHabitat}
        />
        {this.state.stage === "drafting" && (
          <DraftView
            draftCardsSet1={draftCardsSet1}
            draftCardsSet2={draftCardsSet2}
            addPlayerCard={this.addPlayerCard}
          />
        )}
        {this.state.stage === "startScreen" && (
          <GameStart
            playerHand={playerHand}
            computerHand={computerHand}
            changePlayer={this.changePlayer}
            changeStage={this.changeStage}
          />
        )}
        {this.state.currentTrait && (
          <TraitMessage
            action={this.state.currentTrait}
            handleClick={this.handleClick}
          />
        )}
        {this.state.showMessage && (
          <Message
            showMessage={this.state.showMessage}
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
        <button onClick={() => this.changePlayer()}>Change Player</button>
        {this.state.stage === "result" && (
          <Result habitats={habitats} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default PlayScreen;
