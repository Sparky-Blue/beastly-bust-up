import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import PlayScreen from "./components/PlayScreen";
import { connect } from "react-redux";
import { startToggle } from "./store/actions/modals";

class AppClass extends Component {
  startPlayerVComputer = () => {
    this.props.toggleStart();
  };

  newGame = () => {
    this.props.toggleStart();
  };

  render() {
    const selected = this.props.StartModalOpen;
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

const mapStateToProps = state => ({ StartModalOpen: state.modals.startOpen });

const mapDispatchToProps = dispatch => ({
  toggleStart: () => dispatch(startToggle())
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppClass);

export default App;
