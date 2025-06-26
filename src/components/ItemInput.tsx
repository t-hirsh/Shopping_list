import React from 'react';
import { TextField, Button } from '@mui/material';

interface ItemInputProps {
  productName: string;
  setProductName: (name: string) => void;
  category: string;
  setCategory: (category: string) => void;
  handleAddItem: () => void;
}

const ItemInput: React.FC<ItemInputProps> = ({ productName, setProductName, category, setCategory, handleAddItem }) => {
  return (
    <>
      <TextField
        label="הוסף מוצר"
        value={productName}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddItem}>
        הוסף מוצר
      </Button>
    </>
  );
};

export default ItemInput;

