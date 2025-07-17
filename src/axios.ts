import axios from 'axios';
const API_URL = 'http://localhost:6868'; 
export const getCategories = async (): Promise<string[]> => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data.slice(1, -2).map((item: unknown) => {
            if (typeof item === 'object' && item !== null && 'name' in item) {
                return (item as { name: string }).name;
            }
            return ''; 
        });    } catch (error) {
        throw new Error('Network response was not ok');
    }
};
export const post = async (cart: any) => {
    try {
      const response = await axios.post(`${API_URL}/shopping-list`, cart);
      return response.data; 
    } catch (error) {
      throw new Error(`Error posting shopping list: ${error}`);
    }
  };

