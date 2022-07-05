import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.id = initialState.id;
      state.userName = initialState.userName;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
