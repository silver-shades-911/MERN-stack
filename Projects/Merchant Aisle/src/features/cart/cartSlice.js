import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      //   console.log(action);
      let product = action.payload;
      //   console.log("added Product =>", product);
      state.cart.push(product);
    },

    remove_from_cart: (state, action) => {
      let pID = action.payload;

      // state.cart = state.cart.filter((c) => c.id !== pID); --- This is immutable way
      // their is best way also
      // redux toolkit provide mutable way , it is more recommanded

      const index = state.cart.findIndex((c) => c.id === pID);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    change_qyt: (state, action) => {
      let pID = action.payload.pID; //! Wrong data access can lead to unexpected behaviour of state

      if (!state.cart) {
        console.warn("Cart is undefined");
        return;
      }

      console.log("state ==>", state.cart);

      let product = state.cart.find((c) => c.id === pID);
      console.log("product ==>", product);

      if (product) {
        product.qyt = action.payload.qyt;
      } else {
        console.warn(`Product with ID ${pID} not found in cart.`);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_to_cart, remove_from_cart, change_qyt } = cartSlice.actions;

export default cartSlice.reducer;
