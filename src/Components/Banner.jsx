import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import backgroundImage from "../Assets/Images/single-image1.png"; // Import the background image
import logoImage from "../Assets/Images/logo.png"; // Import the logo image

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba", // The background color (this will mix with the image)
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundImage: `url(${backgroundImage})`, // Set the imported background image
        backgroundPosition: "right", // Position the image to the right
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundSize: "contain", // Ensure the background image is fully visible
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Gooods Avaialble
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              LINK us with you
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Logo"
              src={logoImage} // Set the logo image here
              sx={{ width: 100, height: 100 }} // Adjust the size of the logo
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
