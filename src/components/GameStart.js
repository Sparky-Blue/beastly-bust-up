import React, { Component } from "react";
import GameStartDisplay from "./GameStartDisplay";

class GameStart extends Component {
  state = {
    playerRank: null,
    computerRank: null
  };
  componentDidMount() {
    this.calculateRanks();
    this.setStartPlayer();
  }
  calculateRanks = () => {
    this.setState({
      playerRank: this.props.playerHand.reduce((acc, fighter) => {
        return (acc += fighter.rank);
      }, 0),
      computerRank: this.props.computerHand.reduce((acc, fighter) => {
        return (acc += fighter.rank);
      }, 0)
    });
  };

  setStartPlayer = () => {
    const { playerRank, computerRank } = this.state;
    playerRank < computerRank && this.props.changePlayer();
  };

  render() {
    const { playerRank, computerRank } = this.state;
    return (
      <GameStartDisplay
        startPlayer={playerRank >= computerRank ? "player" : "computer"}
        playerRank={playerRank}
        computerRank={computerRank}
        startGame={this.props.startGame}
      />
    );
  }
}

export default GameStart;
