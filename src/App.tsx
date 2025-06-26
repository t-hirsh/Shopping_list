import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store  from './redux/store'
import ItemInput from './components/ItemInput';
import ItemList from './components/ItemList';
import CheckoutButton from './components/CheckoutButton';
import CategorySelect from './components/CategorySelect';


interface Item {
    name: string;
    quantity: number;
}

const App: React.FC = () => {
    const [productName, setProductName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = () => {
        if (productName && category) {
            setItems([...items, { name: productName, quantity: 1 }]);
            setProductName('');
            setCategory('');
        }
    };

    const handleCheckout = () => {
        // לוגיקה לסיום ההזמנה
        alert('ההזמנה הושלמה!');
    };

    return (
        <Provider store={store}>
            <div>
                <h1>רשימת קניות</h1>
                <CategorySelect />
                <ItemInput 
                    productName={productName} 
                    setProductName={setProductName} 
                    category={category} 
                    setCategory={setCategory} 
                    handleAddItem={handleAddItem} 
                />
                <ItemList items={items} />
                <CheckoutButton handleCheckout={handleCheckout} />
            </div>
        </Provider>
    );
};

export default App;
