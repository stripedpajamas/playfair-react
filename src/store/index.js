import { createStore } from 'redux';
import main from './reducers';

export default createStore(
  main,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
