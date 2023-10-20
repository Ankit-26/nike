import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: { shopActive: false },
  reducers: {
    setShoppingActive: (state, action) => {
      return { ...state, shopActive: action.payload };
    },
  },
});

export const appAction = appSlice.actions;
