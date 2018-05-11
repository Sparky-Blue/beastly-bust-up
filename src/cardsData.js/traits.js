const traits = {
  FIERCE:
    "When this card is played, you must trash* one of the opposing Fighters in this Habitat. Select the card to trash and discard it from the game.",
  HEFTY:
    "When this card is played, you must bounce one of the opposing Fighters in this Habitat. Select the card to bounce and move it to another Habitat. The card must be moved to a Habitat that does not contain any other Fighters from that player's team. If there are no such Habitats available, then the card may be moved to the Habitat of your choice. *trash means to remove from the game",
  QUICK:
    "When this card is played, and the card’s other Traits (if any) have been resolved, you may immediately play a second card from your team into the same Habitat (unless it is Full). If the second card also has a Quick trait, then that Trait is ignored.",
  BRAVE:
    "As long as this card is the only one from its team in a Habitat, then its rank counts as being two Points higher.",
  UNRELIABLE:
    "If this card is the only one from its team in a Habitat at the end of the game, it is trashed.",
  TOUGH:
    "If this card is targeted by a Fighter’s ‘Fierce’ trait, then it is unaffected and remains in the Habitat. (Note: a Tough Fighter may choose to be trashed in this situation).",
  AGILE:
    "If this card is targeted by a Fighter’s ‘Hefty’ trait, then it is unaffected and remains in the Habitat. (Note: an Agile Fighter may choose to be bounced in this situation).",
  AQUATIC:
    "When an Aquatic Fighter is in a Habitat that carries a water drop symbol, the Fighter counts as having the Tough and Agile traits.",
  HORNS:
    "If this card is trashed by a Fierce card, then the Fierce card itself is also trashed.",
  FLY:
    "If this card is bounced by a Hefty card, it may choose which Habitat to move to, and may move to any Habitat that isn’t Full.",
  FANCY:
    "At the end of the game, Habitats increase their Points value by 1 for every Fancy Fighter that they contain.",
  DIRTY:
    "At the end of the game, Habitats decrease their Points value by 1 for every Dirty Fighter that they contain."
};

export default traits;
