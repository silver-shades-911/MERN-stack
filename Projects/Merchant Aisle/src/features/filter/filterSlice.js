import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
      console.log(" state =>", state.sort);
    },
    toggleStock: (state) => {
      state.byStock = !state.byStock;
      console.log(" state =>", state.byStock);
    },
    toggleFastDelivery: (state) => {
      state.byFastDelivery = !state.byFastDelivery;
      console.log(" state =>", state.byFastDelivery);
    },
    setRating: (state, action) => {
      state.byRating = action.payload;
      console.log(" state =>", state.byRating);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      console.log(" state =>", state.searchQuery);
    },
    // clearFilter: (state) => {
    //     console.log("clear filter");
    //   state.sort = "";
    //   state.byStock = false;
    //   state.byFastDelivery = false;
    //   state.byRating = 0;
    //   state.searchQuery = "";
    // },

    clearFilter: () => initialState, // short cut way to set to initial state 
  },
});

// Action creators are generated for each case reducer function
export const {
  setSort,
  toggleFastDelivery,
  toggleStock,
  setRating,
  setSearchQuery,
  clearFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
