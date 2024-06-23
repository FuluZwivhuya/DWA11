// import {createStore} from "store"

// const initialState = { count: 0 };

// const counterReducer = (state = initialState, action) => {
//   // Handle actions here...
//   return state;
// };

// const store = createStore(counterReducer);
// export default store;

import { ADD, MINUS } from './actions.js';
import reducer from './reducer.js';

const store = {
  state: { count: 0 },
  listeners: [],

  getState() {
    return this.state;
  },

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
};

export const add = () => {
  store.state = reducer(store.state, { type: ADD });
  store.notify();
};

export const minus = () => {
  store.state = reducer(store.state, { type: MINUS });
  store.notify();
};

export default store;