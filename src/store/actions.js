import Playfair from '../lib/playfair';

const pf = new Playfair();

/**
 * action types
 */
export const SET_GRID = 'SET_GRID';
export const UPDATE_OUTPUT = 'UPDATE_OUTPUT';


/**
 * action creators
 */
export function setGrid(keyword) {
  pf.setKey(keyword);
  return { type: SET_GRID, grid: pf.grid }
}

export function updateOutput({ input, decrypt }) {
  const output = pf.process({ input, decrypt });
  return { type: UPDATE_OUTPUT, output }
}
