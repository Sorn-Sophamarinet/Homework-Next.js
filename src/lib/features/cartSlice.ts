"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/types/ProductType';

interface CartItem extends ProductType {
  quantity: number;
}

// Define Cart state
interface CartState {
  items: CartItem[];
  itemsCount: number;
}

const initialState: CartState = {
  items: [],
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.itemsCount += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.itemsCount += 1;
      }
    },
    // Action to increment quantity
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.itemsCount += 1;
      }
    },
    // Action to decrement quantity
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemsCount -= 1;
      }
    },
    // Action to remove item from cart
    removeFromCart(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.itemsCount -= item.quantity;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    // Action to clear the cart
    clearCart(state) {
      state.items = [];
      state.itemsCount = 0;
    },
  },
});

// Export actions
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;