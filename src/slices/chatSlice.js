import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatingInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chatingInfo } = chatSlice.actions;

export default chatSlice.reducer;
