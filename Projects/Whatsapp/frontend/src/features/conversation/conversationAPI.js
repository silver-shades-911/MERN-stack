import { createAsyncThunk } from "@reduxjs/toolkit";

// send message thunk
export const sendMessage = createAsyncThunk(
  "conversation/sendMessage",
  async (message, thunkAPI) => {
    try {
      console.log("i am at sendMessage thunk");
      console.log("incoming message at sendMessage thunk => ", message);

      // accesing Redux state
      const state = thunkAPI.getState();
      const selectedConversation = state.conversation.selectedConversation;

      console.log(
        "other user id at send Message Thunk => ",
        selectedConversation._id
      );

      const res = await fetch(
        `http://localhost:5000/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ message }),
        }
      );

      //checking
      if (!res.ok) {
        const data = await res.json();
        console.log("data at sendMessage thunk =>", data);
        return thunkAPI.rejectWithValue(message);
      }

      const result = await res.json();
      console.log("res data at sendMessage thunk =>", result);
      return result; // ✅ return this so it's received as `action.payload`
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
