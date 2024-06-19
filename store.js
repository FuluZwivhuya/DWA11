import {createStore} from "store"

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  // Handle actions here...
  return state;
};

const store = createStore(counterReducer);
export default store;