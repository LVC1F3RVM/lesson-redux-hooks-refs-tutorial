import { MINUS, ADD, DIVIDE, CLEAR } from "../constants/counts";
const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + action.payload;
    case MINUS:
      return state - action.payload;
    case DIVIDE:
      return state / action.payload;  
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
