import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";
import { wishListSlice } from "./wishlistSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
    wishListReducer: wishListSlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});
