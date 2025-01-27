import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Divider, Grid } from '@mui/material';

export default function OrderLists() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders from localStorage (assuming you save them after each order is submitted)
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Order History
      </Typography>
      {orders.length === 0 ? (
        <Typography>No orders yet!</Typography>
      ) : (
        orders.map((order, index) => (
          <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">Order #{index + 1}</Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {order.cart.map((product) => (
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
            <Typography variant="h6">Total: ${order.total}</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Shipping to: {order.shippingDetails.name}, {order.shippingDetails.address}, {order.shippingDetails.city}, {order.shippingDetails.country} - {order.shippingDetails.zip}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
}
