import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./conversationAPI.js";

const initialState = {
  selectedConversation: {},
  messages: [],
  loading: false,
  error: null,
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    selectConversation: (state, action) => {
      console.log(state.selectedConversation);
      state.selectedConversation = action.payload;
    },

    cleanUp: (state, action) => {
      state.selectedConversation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload at conversation Slice =>", action.payload);
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { selectConversation, cleanUp } = conversationSlice.actions;

export default conversationSlice.reducer;
