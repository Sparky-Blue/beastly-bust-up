const types = {
  ADD_CARD = "HABITAT.ADD_CARD",
  CLEAR = "HABITAT.CLEAR",
}

export const addCard = (card) => {
  type = ADD_CARD, card
}

export const clear = () => {
  type = CLEAR
}