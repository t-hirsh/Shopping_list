import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Paper, Typography, CssBaseline, Box } from '@mui/material';
import { addItem, removeItem } from './redux/cartSlice';
import ItemInput from './components/ItemInput';
import ItemList from './components/ItemList';
import CategorySelect from './components/CategorySelect';
import CheckoutButton from './components/CheckoutButton';

const ShoppingListApp: React.FC = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);
    const items = useSelector((state: RootState) => state.cart.items || []);

    const handleAddItem = (productName: string, quantity: number) => {
        if (productName.trim() && selectedCategory) {
            dispatch(addItem({
                name: productName.trim(),
                category: selectedCategory,
                quantity
            }));
        }
    };

    const handleRemoveItem = (idToRemove: string) => {
        dispatch(removeItem({ id: idToRemove })); 
    };

    const isAddDisabled = !selectedCategory;

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    🛒 רשימת קניות
                </Typography>

                <Box component="section" sx={{ mb: 3 }}>
                    <CategorySelect />
                    <ItemInput
                        handleAddItem={handleAddItem}
                    />
                </Box>

                <Box component="section">
                    <ItemList items={items} handleRemoveItem={handleRemoveItem} />
                </Box>

                <Box component="section" sx={{ mt: 'auto' }}>
                <CheckoutButton cart={items} />
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