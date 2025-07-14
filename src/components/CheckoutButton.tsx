import React from 'react';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

interface CheckoutButtonProps {
  handleCheckout: () => void;
  isDisabled: boolean;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ handleCheckout, isDisabled }) => {
  return (
    <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handleCheckout}
        disabled={isDisabled}
        startIcon={<ShoppingCartCheckoutIcon />}
        sx={{ mt: 2 }}
    >
      סיים ושלם
    </Button>
  );
};

export default CheckoutButton;