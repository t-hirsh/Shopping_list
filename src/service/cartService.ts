
import { post } from '../axios'; 

export const sendCartToServer = async (cart: unknown[]): Promise<boolean> => {
    try {
        const response = await post(cart); 
        return true;
    } catch (error) {
        return false;
    }
};
