import React, { Fragment, Component } from "react";
import "./Result.css";
import {
  calculateHabitatScores,
  calculateFighterRanks,
  calculateHabitatWinner,
  calculateOverAllWinner,
  getWinnerMessage
} from "../utils";

class Result extends Component {
  state = {
    scores: {},
    winner: ""
  };
  componentDidMount() {
    this.checkScore(this.props.habitats);
  }
  checkScore = habitats => {
    const updatedHabitatPoints = calculateHabitatScores(habitats);
    const habitatsWithUpdatedRanks = calculateFighterRanks(
      updatedHabitatPoints
    );
    const scoreTally = calculateHabitatWinner(habitatsWithUpdatedRanks);
    const finalScores = calculateOverAllWinner(scoreTally);
    const winnerMessage = getWinnerMessage(finalScores);
    this.setState({
      scores: finalScores,
      winner: winnerMessage
    });
  };

  render() {
    const { scores, winner } = this.state;
    console.log({ scores });
    return (
      <Fragment>
        return (
        <div className="winnerMessage">
          <h2>Player rank is {scores.player}</h2>
          <h2>Computer rank is {scores.computer}</h2>
          <h1>{winner}</h1>
          <button onClick={() => this.props.handleClick("restart")}>
            Play again
          </button>
        </div>
        );
      </Fragment>
    );
  }
}

export default Result;
