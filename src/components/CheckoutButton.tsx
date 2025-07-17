import React from 'react';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { sendCartToServer } from '../service/cartService';

interface CheckoutButtonProps {
  cart: any[];
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ cart }) => {
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    const response = await sendCartToServer(cart);
    if (response) {
      dispatch(clearCart());
      alert('הרשימה נשמרה בהצלחה!');

    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleButtonClick}
      startIcon={<ShoppingCartCheckoutIcon />}
    >
      סיים הזמנה
    </Button>
  );
};

export default CheckoutButton;