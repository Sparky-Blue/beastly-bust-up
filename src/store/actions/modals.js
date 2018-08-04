export const types = {
  START_TOGGLE: "MODAL.START_TOGGLE",
  RANKS_TOGGLE: "MODAL.RANKS_TOGGLE",
  WINNER_TOGGLE: "MODAL.WINNER_TOGGLE",
  TRASH_TOGGLE: "MODAL.TRASH_TOGGLE",
  BOUNCE_TOGGLE: "MODAL.BOUNCE_TOGGLE",
  SWIFT_TOGGLE: "MODAL.SWIFT_TOGGLE"
};

export const startToggle = () => ({
  type: types.START_TOGGLE
});

export const ranksToggle = () => ({
  type: types.RANKS_TOGGLE
});

export const winnerToggle = () => ({
  type: types.WINNER_TOGGLE
});
export const trashToggle = () => ({
  type: types.TRASH_TOGGLE
});
export const bounceToggle = () => ({
  type: types.BOUNCE_TOGGLE
});
export const swiftToggle = () => ({
  type: types.SWIFT_TOGGLE
});
