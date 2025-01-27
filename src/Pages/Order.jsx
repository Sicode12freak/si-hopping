// Order.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  });

  useEffect(() => {
    // Fetch cart data from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleInputChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = () => {
    // Here, you could integrate with an API to submit the order
    localStorage.removeItem('cart'); // Clear cart after order
    alert('Order submitted successfully!');
    navigate('/'); // Redirect to the home page after order submission
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Order Confirmation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Shipping Details</Typography>
            <TextField
              label="Name"
              name="name"
              value={shippingDetails.name}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Address"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="City"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Zip Code"
              name="zip"
              value={shippingDetails.zip}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={shippingDetails.country}
                onChange={handleInputChange}
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="japan">Japan</MenuItem>
                <MenuItem value="Russia">Russia</MenuItem>
            
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Order Summary</Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {cart.map((product) => (
              <Box key={product.id} sx={{ marginBottom: 2 }}>
                <Typography variant="body2">
                  {product.title} x {product.quantity}
                </Typography>
                <Typography variant="body2">
                  Subtotal: ${product.price * product.quantity}
                </Typography>
              </Box>
            ))}
            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleSubmitOrder}>
          Submit Order
        </Button>
      </Box>
    </Box>
  );
}
