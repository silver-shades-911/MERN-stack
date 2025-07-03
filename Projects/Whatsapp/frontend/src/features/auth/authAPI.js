import { createAsyncThunk } from "@reduxjs/toolkit";

// signup thunk
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { fullName, username, password, confirmPassword, gender },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      // checking does response come ok or not
      if (!res.ok) {
        const data = await res.json();
        return thunkAPI.rejectWithValue(data.message); // error case
      }

      const data = await res.json();
      return data.user; // this become payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*

        🔍 Line in Question

            js
            createAsyncThunk("auth/loginUser", async () => { ... })


        🔹 "auth/loginUser" is the action type name.

            It’s just a label that Redux uses internally to track actions.

        ✅ What It Does
            When you use createAsyncThunk("auth/loginUser", asyncFn)...

        Redux Toolkit will automatically generate three actions:

            Action Type	When It Happens

            auth/loginUser/pending	when API call starts
            auth/loginUser/fulfilled	when API returns OK
            auth/loginUser/rejected	when API fails

            These names are based on the string you provide: "auth/loginUser".

        You handle these in extraReducers:

            js

            .addCase(loginUser.pending, ...)
            .addCase(loginUser.fulfilled, ...)
            .addCase(loginUser.rejected, ...)


*/
