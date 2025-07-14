import React from 'react';
import { TextField, Button, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ItemInputProps {
  productName: string;
  setProductName: (name: string) => void;
  handleAddItem: () => void;
  isAddDisabled: boolean;
}

const ItemInput: React.FC<ItemInputProps> = ({ productName, setProductName, handleAddItem, isAddDisabled }) => {
   
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !isAddDisabled) {
            handleAddItem();
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
            <Button
                variant="contained"
                onClick={handleAddItem}
                disabled={isAddDisabled}
                startIcon={<AddShoppingCartIcon />}
            >
                הוסף
            </Button>
        </Stack>
    );
};

export default ItemInput;
