// ProductCard.js
import React from 'react';
import { Box, CardActions, CardContent, CardMedia, Chip, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const addToCart = () => {
    // Fetch the current cart from localStorage, or initialize it if empty
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // If it's a new product, add it with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Box>
      <Paper elevation={2}>
        <CardMedia
          component="img"
          alt={product.title}
          height="300"
          image={product.thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCart} variant="contained" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Paper>
    </Box>
  );
}
