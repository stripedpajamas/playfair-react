import { SET_GRID, UPDATE_OUTPUT } from './actions';

const initialState = {
  grid: [],
  output: '',
  decrypt: false
};

function main(state = initialState, action) {
  switch (action.type) {
    case SET_GRID:
      return Object.assign({}, state, {
        grid: action.grid
      });
    case UPDATE_OUTPUT:
      return Object.assign({}, state, {
        output: action.output
      });
    default:
      return state;
  }
}

export default main;
