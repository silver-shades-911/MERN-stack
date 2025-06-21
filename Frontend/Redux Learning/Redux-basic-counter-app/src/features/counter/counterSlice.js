// TODO 2: Import createSlice function
import { createSlice } from "@reduxjs/toolkit";

// TODO 3: define initial state
const initialState = {
  value: 0,
};

//TODO 4: Create slice object with having name, initialstate, reducers keys-values

export const counterSlice = createSlice({
  name: "counter",

  initialState,

  // TODO 5: reducers is an object containing functions that manipluate the state.
  // They are full function/method means have full logic to take data ( or sometimes not ) and do full operation , They are not state varable setter (e.g. setCount) functions
  reducers: {
    // each fucntion contain 2 parameters: state and action
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },

    //? How to send data to the reducer function?
    // => answer is as normally we do by passing as parameter
    //? How to access that data in the reducer function?
    // => answer is by using action.payload, i contain the data we passed , payload is the Object that contains the data we passed
    incementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//TODO 6: Export all the reducer functions so we can use them in the components as we want
export const { increment, decrement, incementByAmount } = counterSlice.actions; // <== carefully see syntax

//TODO 7: Export the whole reducer key (object) in counterSlice to our store
// why we export to store ? because untill explicitly decleared store won't update its data by functions
// so we need to tell store that update ur values if they are changed by this reducer functions

export default counterSlice.reducer;
