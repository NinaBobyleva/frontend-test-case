import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  errorUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorUser: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setUser,
  setErrorUser
} = userSlice.actions;

export const userReducers = userSlice.reducer;