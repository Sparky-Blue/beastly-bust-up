import React, { Component } from "react";
import Habitats from "./Habitats";

class HabitatView extends Component {
  render() {
    const {
      habitats,
      handleClick,
      playedTraits,
      active,
      currentHabitat
    } = this.props;
    return (
      <Habitats
        habitats={habitats}
        handleClick={handleClick}
        playedTraits={playedTraits}
        active={active}
        currentHabitat={currentHabitat}
      />
    );
  }
}

export default HabitatView;
