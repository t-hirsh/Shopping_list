import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  name: string;
  category: string;
  quantity: number;
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
