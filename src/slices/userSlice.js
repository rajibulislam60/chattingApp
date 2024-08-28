import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinUserInfo: (state, action) => {

      
    //   state.value += 1;
    state.value = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { signinUserInfo } = userSlice.actions;

export default userSlice.reducer;
