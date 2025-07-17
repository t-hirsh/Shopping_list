
import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface ItemInputProps {
    handleAddItem: (productName: string, quantity: number) => void;
}

const ItemInput: React.FC<ItemInputProps> = ({ handleAddItem }) => {
    const dispatch = useDispatch();

    const handleAddItemInternal = (productName: string, quantity: number, category: string) => {        
        dispatch(addItem({ name: productName, category: category, quantity: quantity }));
    };
    const [productName, setProductName] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const category = useSelector((state: RootState) => state.categories.selectedCategory);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleAddItemInternal(productName, quantity, category);
        }
    };

    return (
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <TextField
                label="שם המוצר"
                variant="outlined"
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <TextField
                label="כמות"
                type="number"
                variant="outlined"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                inputProps={{ min: 1 }}
            />
            <Button
                variant="contained"
                onClick={() => handleAddItemInternal(productName, quantity, category)}
                startIcon={<AddShoppingCartIcon />}
            >
                הוסף
            </Button>
        </Stack>
    );
};

export default ItemInput;
