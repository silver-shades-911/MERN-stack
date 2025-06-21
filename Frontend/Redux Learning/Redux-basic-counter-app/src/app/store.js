// TODO 1: setting up store and wrape App with Provider
import { configureStore } from "@reduxjs/toolkit";

// TODO 8: explicitly declare which reducer methods can change values store in store
// import the reducer object from counterSlice.js
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  //TODO 9: add the reducer object to the store
  reducer: {
    // key is the name of the slice, value is the reducer object
    counter: counterReducer,
  },
});
