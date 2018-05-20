import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import PlayScreen from "./components/PlayScreen";

class App extends Component {
  state = {
    selected: false
  };

  startPlayerVComputer = () => {
    this.setState({
      selected: true
    });
  };

  newGame = () => {
    this.setState({
      selected: false
    });
  };

  render() {
    const selected = this.state.selected;
    return (
      <div className="App">
        <Header />
        {selected ? (
          <PlayScreen newGame={this.newGame} />
        ) : (
          <StartScreen start={this.startPlayerVComputer} />
        )}
      </div>
    );
  }
}

export default App;
