import React, { Component } from "react";
import Habitats from "./Habitats";

class HabitatView extends Component {
  render() {
    const { habitats, handleClick, playedTraits, active } = this.props;
    return (
      <Habitats
        habitats={habitats}
        handleClick={handleClick}
        playedTraits={playedTraits}
        active={active}
      />
    );
  }
}

export default HabitatView;
