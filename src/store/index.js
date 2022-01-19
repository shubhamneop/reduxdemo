import { createStore } from "redux";
import { DECREMENT, INCREMENT, INCREMENTBY, TOGGLE } from "./type";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    state = { ...state };
    state["counter"] = state.counter + 1;
    return state;
  }

  if (action.type === INCREMENTBY) {
    state = { ...state };
    state["counter"] = state.counter + action.payload;
    return state;
  }

  if (action.type === DECREMENT) {
    state = { ...state };
    state["counter"] = state.counter - 1;
    return state;
  }
  if (action.type === TOGGLE) {
    state = { ...state };
    state["showCounter"] = !state.showCounter;
    return state;
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
