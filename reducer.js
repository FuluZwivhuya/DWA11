// export const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD':
//         return { ...state, count: state.count + 1 };
//       case 'MINUS':
//         return { ...state, count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

import { ADD, MINUS } from './actions.js';

const initialState = {
  count: 0
};

const handlers = {
  [ADD]: (state) => ({ ...state, count: state.count + 1 }),
  [MINUS]: (state) => ({ ...state, count: state.count - 1 }),
};

const reducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }
  return state;
};

export default reducer;