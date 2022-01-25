import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  itemCount: 0,
  cartPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        if (product.amount + 1 > product.countInStock) {
          alert("Maximo stock permitido");
        } else {
          product.amount += 1;

          state.cartPrice += action.payload.price;
          state.itemCount++;
        }
      } else {
        state.cart.push({
          _id: action.payload._id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          countInStock: action.payload.countInStock,
          amount: 1,
        });

        state.cartPrice += action.payload.price;
        state.itemCount++;
      }
    },
    removeProduct: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload
      );

      if (product.amount - 1 < 1) {
        state.cart = state.cart.filter((prod) => prod._id !== product._id);
        state.cartPrice -= product.price;
      } else {
        product.amount--;
        state.cartPrice -= product.price;
      }
      state.itemCount--;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
