// export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

//create variables safety check against spelling and allow autocomplete

export const ADD_DRAFT = "ADD_DRAFT";
export const SELECT_HABITATS = "SELECT_HABITATS";
export const REMOVE_CARD = "REMOVE_CARD";
export const ADD_CARD = "ADD_CARD";
export const CHANGE_TRAIT = "CHANGE_TRAIT";
export const CHANGE_GAME_STAGE = "CHANGE_GAME_STAGE";
export const CHANGE_PLAY_STYLE = "CHANGE_PLAY_STYLE";
export const TOGGLE_PLAYER = "TOGGLE_PLAYER";
export const SELECT_CARD = "SELECT_CARD";
export const SELECT_HABITAT = "SELECT_HABITAT";
// export const CALCULATE_RANK = "CALCULATE_RANK";

export const Traits = {
  FIERCE: "FIERCE",
  HEFTY: "HEFTY",
  QUICK: "QUICK",
  BRAVE: "BRAVE",
  UNRELIABLE: "UNRELIABLE",
  TOUGH: "TOUGH",
  AGILE: "AGILE",
  AQUATIC: "AQUATIC",
  HORNS: "HORNS",
  FLY: "FLY",
  FANCY: "FANCY",
  DIRTY: "DIRTY"
};

export const Fighters = {
  name: "Boar",
  name: "Camel",
  name: "Cat",
  name: "Chameleon",
  name: "Cheetah",
  name: "Chicken",
  name: "Chimpanzee",
  name: "Cobra",
  name: "Cow",
  name: "Crab",
  name: "Crocodile",
  name: "Dog",
  name: "Dolphin",
  name: "Elephant"
};

export const Habitats = {
  name: "caves",
  name: "desert",
  name: "field",
  name: "foothills",
  name: "forest",
  name: "hills",
  name: "Ice_Floes",
  name: "Jungle",
  name: "Nocturnal",
  name: "Ocean",
  name: "Peaks",
  name: "Plains",
  name: "River",
  name: "Shore",
  name: "Swamp",
  name: "Tundra",
  name: "UnderSea",
  name: "Urban"
};

//action creators

export function add_draft(fighter) {
  type: ADD_DRAFT, card;
}
export function select_habitats(habitat) {
  type: SELECT_HABITATS, habitat;
}
export function remove_card(fighter) {
  type: REMOVE_CARD, fighter;
}
export function add_card(fighter) {
  type: ADD_CARD, fighter;
}
export function change_trait(trait) {
  type: CHANGE_TRAIT, trait;
}
export function change_game_stage(stage) {
  type: CHANGE_GAME_STAGE, stage;
}
export function change_play_style(style) {
  type: CHANGE_PLAY_STYLE, style;
}
export function toggle_player(bool) {
  type: TOGGLE_PLAYER, bool;
}
export function select_card(fighter) {
  type: SELECT_CARD, fighter;
}
export function select_habitat(habitat) {
  type: SELECT_HABITAT, habitat;
}
// export function calculate_rank(){ type: CALCULATE_RANK,}
