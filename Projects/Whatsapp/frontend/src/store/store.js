import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice.js";
import contactsReducer from "../features/contacts/contactSlice.js"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsReducer,
  },
});
