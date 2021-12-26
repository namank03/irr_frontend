import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const initialState = {
  username: null,
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    defaultState: (state) => {
      state.token = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signinUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.key;
        localStorage.setItem("token", payload.key);
      }
    );
  },
});

export const { setUsername, defaultState } = authSlice.actions;

export default authSlice.reducer;
