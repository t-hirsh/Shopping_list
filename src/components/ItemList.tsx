import React from 'react';
import { List, ListItem } from '@mui/material';
interface ItemListProps {
  items: { name: string; quantity: number }[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <>
      <h6>
        סה"כ: {items.length} מוצרים בסל
      </h6>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            
            {item.name} ({item.quantity})
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ItemList;

