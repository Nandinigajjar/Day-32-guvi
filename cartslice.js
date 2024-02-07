
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
}
  items: [], 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
    },
    removeItem(state, action) {
    },
    updateQuantity(state, action) {
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
