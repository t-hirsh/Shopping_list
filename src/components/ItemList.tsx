import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

export interface Item {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

const ItemList: React.FC = () => {
  const cart: { [category: string]: Item[] } = useSelector((state: RootState) => state.cart); 
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem({ id: id })); 
  };

  const totalQuantity = Object.values(cart).flat().reduce((total, item) => total + item.quantity, 0);

  if (totalQuantity === 0) {
    return (
      <Box textAlign="center" sx={{ my: 4, color: 'text.secondary' }}>
        <Typography>רשימת הקניות שלך ריקה.</Typography>
        <Typography variant="body2">הוסף מוצרים באמצעות הטופס למעלה.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h6" component="h2" gutterBottom>
        סה"כ: {totalQuantity} מוצרים בסל
      </Typography>
      <List>
        {Object.entries(cart).map(([category, items]) => (
          <React.Fragment key={category}>
            <Typography variant="h6">{category}</Typography>
            {items.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
                divider
              >
                <ListItemText primary={`${item.name} (כמות: ${item.quantity})`} secondary={item.category} />
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default ItemList;
