import React from 'react';
import { Button } from '@mui/material';

interface CheckoutButtonProps {
  handleCheckout: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ handleCheckout }) => {
  return (
    <Button variant="contained" color="primary" onClick={handleCheckout}>
      סיים הזמנה
    </Button>
  );
};

export default CheckoutButton;

