import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart: (state, action) => {
      if (state.products.find(prod => prod.id == action.payload.id)) {
        return {
          ...state,
          products: state.products.map(prod => {
            return {
              ...prod,
              quantity:
                prod.id == action.payload.id
                  ? prod.quantity + 1
                  : prod.quantity,
            };
          }),
        };
      }

      return {
        ...state,
        products: [{ ...action.payload, quantity: 1 }, ...state.products],
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (product, index) => product.id !== action.payload
        ),
      };
    },
    updateCart: (state, action) => {
      return {
        ...state,
        products: state.products.map((product, index) => {
          if (product.id == action.payload.id) {
            return { ...product, ...action.payload };
          }
          return product;
        }),
      };
    },
  },
});

export const cartAction = cartSlice.actions;
