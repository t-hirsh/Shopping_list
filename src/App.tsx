import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import  store from '../src/redux/store';
import { RootState } from '../src/redux/store'; 

import { Container, Paper, Typography, CssBaseline, Box } from '@mui/material';

import ItemInput from './components/ItemInput';
import ItemList, { Item } from './components/ItemList';
import CheckoutButton from './components/CheckoutButton';
import CategorySelect from './components/CategorySelect';

const ShoppingListApp: React.FC = () => {
    const [productName, setProductName] = useState<string>('');
    const [items, setItems] = useState<Item[]>([]);
   
    const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);

    const handleAddItem = () => {
        if (productName.trim() && selectedCategory) {
            const newItem: Item = {
                id: new Date().getTime().toString(), 
                name: productName.trim(),
                category: selectedCategory
            };
            setItems([...items, newItem]);
            setProductName(''); 
        }
    };

    const handleRemoveItem = (idToRemove: string) => {
        setItems(items.filter(item => item.id !== idToRemove));
    };

    const handleCheckout = () => {
        if (items.length > 0) {
            alert(`ההזמנה הושלמה עם ${items.length} מוצרים!`);
            setItems([]); 
        }
    };

    const isAddDisabled = !productName.trim() || !selectedCategory;

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    🛒 רשימת קניות
                </Typography>
               
                <Box component="section" sx={{ mb: 3 }}>
                    <CategorySelect />
                    <ItemInput
                        productName={productName}
                        setProductName={setProductName}
                        handleAddItem={handleAddItem}
                        isAddDisabled={isAddDisabled}
                    />
                </Box>

                <Box component="section">
                    <ItemList items={items} handleRemoveItem={handleRemoveItem} />
                </Box>
               
                <Box component="section" sx={{ mt: 'auto' }}>
                    <CheckoutButton
                        handleCheckout={handleCheckout}
                        isDisabled={items.length === 0}
                    />
                </Box>
            </Paper>
        </Container>
    );
};

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <CssBaseline />
            <ShoppingListApp />
        </Provider>
    );
};

export default App;
