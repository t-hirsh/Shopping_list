
import axios from 'axios';

export const fetchCategories = async (): Promise<string[]> => {
    try {
        const response = await axios.get('http://localhost:6868/categories');
        return response.data;
    } catch (error) {
        throw new Error('Network response was not ok');
    }
};

export const checkoutCart = async (items: any): Promise<any> => {
    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
