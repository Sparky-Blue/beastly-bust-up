import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartScreen />
      </div>
    );
  }
}

export default App;
