import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../Assets/Images/about-2.jpg"; // Import the image

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={aboutImage} // Use the imported image here
            alt="About Us"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              Explore <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              Emphasize your Unique Styles
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             Ecommerce product management involves strategizing, planning, executing, and optimizing online retail
              offerings to drive sales. Ecommerce product managers are responsible for guiding the end-to-end lifecycle of 
              products on ecommerce platforms, ensuring they meet market needs and exceed customer expectations.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Accept orders
              Record customer information (name, address, etc.)
Collect customers’ acceptance of your terms of service
Calculate any applicable taxes
Apply coupons or discounts
Generate order and tracking numbers
Share delivery details
Process billing information
Provide access to a payment gateway
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
