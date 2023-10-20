import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState: { products: [] },
  reducers: {
    addToWishlist: (state, action) => {
      if (state.products.find(prod => prod.id == action.payload.id)) {
        return {
          ...state,
          products: state.products.filter(prod => prod.id != action.payload.id),
        };
      }
      return { ...state, products: [action.payload, ...state.products] };
    },
    removeFromWishlist: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (product, index) => product.id !== action.payload
        ),
      };
    },
  },
});

export const wishListAction = wishListSlice.actions;
