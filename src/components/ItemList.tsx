import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface Item {
  id: string;
  name: string;
  category: string;
}

interface ItemListProps {
  items: Item[];
  handleRemoveItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, handleRemoveItem }) => {
  if (items.length === 0) {
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
        סה"כ: {items.length} מוצרים בסל
      </Typography>
      <List>
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
            <ListItemText primary={item.name} secondary={item.category} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ItemList;

