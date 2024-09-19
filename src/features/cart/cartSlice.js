import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddToCart(state, action) {
      state.cart.push(action.payload);
    },
    DeleteItem(state, action) {
      console.log(action.payload);

      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increasItem(state, action) {
      const current = state.cart.find((el) => el.pizzaId === action.payload);
      current.quantity++;
      current.totalPrice = current.quantity * current.unitPrice;
    },
    decreasItem(state, action) {
      const current = state.cart.find((el) => el.pizzaId === action.payload);
      current.quantity--;
      current.totalPrice = current.unitPrice * current.quantity;
      if (current.quantity === 0)
        cartSlice.caseReducers.DeleteItem(state, action);
    },
    clearCart(state, action) {
      const confirm = window.confirm("Are you sure ?");
      if (confirm) state.cart = [];
    },
  },
});

export const { AddToCart, DeleteItem, increasItem, decreasItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
