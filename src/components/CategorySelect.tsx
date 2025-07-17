import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../redux/store';
import { loadCategories, setSelectedCategory } from '../redux/categorySlice';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress, FormHelperText } from '@mui/material';

const CategorySelect: React.FC = () => {
    const dispatch = useDispatch();
    const { items: categories, status, selectedCategory, error } = useSelector((state) => state.categories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadCategories());
        }
    }, [status, dispatch]);

    const handleChange = (event: any) => {
        dispatch(setSelectedCategory(event.target.value as string));
    };

    return (
        <FormControl fullWidth sx={{ mb: 2 }} error={status === 'failed'}>
            <InputLabel id="category-select-label">קטגוריה</InputLabel>
            <Select
                labelId="category-select-label"
                value={selectedCategory}
                label="קטגוריה"
                onChange={handleChange}
                disabled={status === 'loading'}
                startAdornment={status === 'loading' ? <CircularProgress size={20} sx={{ mr: 1 }} /> : null}
            >
                <MenuItem value="" disabled>
                    <em>בחר קטגוריה</em>
                </MenuItem>
                {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>
            {status === 'failed' && <FormHelperText>{error || 'שגיאה בטעינת הקטגוריות'}</FormHelperText>}
        </FormControl>
    );
};

export default CategorySelect;
