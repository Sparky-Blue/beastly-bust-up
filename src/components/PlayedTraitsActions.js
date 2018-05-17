import React, { Component } from "react";
import "./ActionMessage.css";
import TraitMessage from "./TraitMessage";

class PlayedTraitActions extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    this.checkTraits(this.props.traits);
  }

  checkTraits = traits => {
    if (traits.includes("FIERCE") && traits.includes("HEFTY")) {
      this.showMessage("FH");
      return;
    }
    if (traits.includes("FIERCE")) {
      this.showMessage("F");
      this.props.setCurrentTrait("F");
      return;
    }
    if (traits.includes("HEFTY")) {
      this.showMessage("H");
      this.props.setCurrentTrait("H");
      return;
    }
    if (traits.includes("QUICK")) {
      this.showMessage("Q");
    }
  };

  showMessage = type => {
    this.setState({
      message: type
    });
  };

  handleClick = (action, value) => {
    if (action === "Q") {
      value === "n" ? this.props.endPlayedTraits() : this.props.playQuickGo();
    }
    if (action === "FH") {
      value === "trash"
        ? this.setState({ message: "F" })
        : this.setState({ message: "H" });
    }
  };

  render() {
    return (
      <TraitMessage
        action={this.state.message}
        handleClick={this.handleClick}
      />
    );
  }
}

export default PlayedTraitActions;
