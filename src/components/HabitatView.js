import React, { Component } from "react";
import Habitats from "./Habitats";

class HabitatView extends Component {
  render() {
    return (
      <Habitats
        habitats={this.props.habitats}
        handleClick={this.props.handleClick}
      />
    );
  }
}

export default HabitatView;
