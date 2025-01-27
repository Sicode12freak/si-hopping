// Cart.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length > 0 ? (
        <Grid container spacing={2}>
          {cart.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">Price: ${product.price}</Typography>
                  <TextField
                    label="Quantity"
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, Math.max(1, e.target.value))
                    }
                    sx={{ marginY: 1 }}
                    fullWidth
                  />
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => removeFromCart(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Typography variant="body2">
                    Subtotal: ${product.price * product.quantity}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">Your cart is empty!</Typography>
      )}

      {cart.length > 0 && (
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Total: ${calculateTotal()}</Typography>
          <Link to="/order">
            <Button variant="contained" color="primary">
              Proceed to Checkout
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
