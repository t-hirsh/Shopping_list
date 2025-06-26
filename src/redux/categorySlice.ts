import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../api';

interface CategoryState {
    items: string[];
    selectedCategory: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CategoryState = {
    items: [],
    selectedCategory: '',
    status: 'idle',
    error: null,
};

export const loadCategories = createAsyncThunk('categories', async () => {
    const categories = await fetchCategories();
    return categories;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(loadCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Unknown error';
            });
    },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
