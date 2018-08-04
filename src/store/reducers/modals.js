// modals.js

import { modals } from "../actions";

const initalState = {
  startOpen: false,
  ranksOpen: false,
  winnerOpen: false,
  trashOpen: false,
  bounceOpen: false,
  swiftOpen: false
};

const modalsReducers = (state = initalState, action) => {
  const newState = {};
  switch (action.type) {
    case modals.types.START_TOGGLE:
      return { ...state, startOpen: !state.startOpen };
    case modals.types.RANKS_TOGGLE:
      return { ...state, ranksOpen: !state.ranksOpen };
    case modals.types.WINNER_TOGGLE:
      return { ...state, winnerOpen: !state.winnerOpen };
    case modals.types.TRASH_TOGGLE:
      return { ...state, trashOpen: !state.trashOpen };
    case modals.types.BOUNCE_TOGGLE:
      return { ...state, bounceOpen: !state.bounceOpen };
    case modals.types.SWIFT_TOGGLE:
      return { ...state, swiftOpen: !state.swiftOpen };
    default:
      return initalState;
  }
};

export default modalsReducers;
