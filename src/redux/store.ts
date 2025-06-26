import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
