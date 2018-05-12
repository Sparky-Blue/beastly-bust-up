import React, { Component } from "react";
import "./DraftView.css";

class DraftView extends Component {
  render() {
    return (
      <div id="draftCards">
        {this.props.draftCards.set1.map((draft, i) => {
          return (
            <div className="draftCard" id={`draft${i}`} key={i}>
              <h3>{draft.name}</h3>
              <p>{draft.habitat}</p>
              <img src={draft.img} alt={draft.name} className="draftImg" />
              {draft.traits.map(trait => <p>{trait}</p>)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DraftView;
