import produce from "immer";

// const state = {
//   habitats: [],
//   playerHand: [],
//   computerHand: [],
//   draft: []
// };

// import { combineReducers } from 'redux'
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// const { SHOW_ALL } = VisibilityFilters

import {
  ADD_DRAFT,
  SELECT_HABITATS,
  REMOVE_CARD,
  ADD_CARD,
  CHANGE_TRAIT,
  CHANGE_GAME_STAGE,
  CHANGE_PLAY_STYLE,
  TOGGLE_PLAYER,
  SELECT_CARD,
  SELECT_HABITAT
} from "./actions";

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

const habitats = (state = [], action) => {
  switch (action.type) {
    case SELECT_HABITATS:
      return [...state, { ...action.habitat }];
    case SELECT_HABITAT:
      return state.map(habitat => {
        if (habitat.name === action.name) {
          return Object.assign({}, habitat, { selected: !habitat.selected });
        }
        return habitat;
      });
    case ADD_CARD:
      return state.map(habitat => {
        if (habitat.name === action.habitat) {
          return Object.assign({}, habitat, {
            fighters: action.name
          });
        }
        return habitat;
      });
  }
};

const byId = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        action.products.forEach(product => {
          draft[product.id] = product;
        });
    }
  });

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
