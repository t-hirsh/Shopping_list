
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

interface CartState {
  [category: string]: Item[]; 
}

const initialState: CartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string; category: string; quantity: number }>) => {
      
      const { name, category, quantity } = action.payload;      
      const id = new Date().toISOString(); 

      if (!state[category]) {        
        state[category] = []; 
      }

      const existingItem = state[category].find(item => item.name === name);
      
      if (existingItem) {
        
        existingItem.quantity += quantity; 
      } else {
        
        state[category].push({ id, name, category, quantity }); 
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string;  }>) => {
      const { id } = action.payload;
      const itemExists = Object.values(state).some(categoryItems => 
        categoryItems.some(item => item.id === id)
    );
    if (itemExists) {
        Object.keys(state).forEach(category => {
            state[category] = state[category].filter(item => item.id !== id);
        });
    }
    },
    clearCart: (state) => {
      return {}; 
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;