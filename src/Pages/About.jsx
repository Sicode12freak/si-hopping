import { Box, Typography } from "@mui/material";
import React from "react";
import AboutContent from "../Components/AboutContent";
import Banner from "../Components/Banner";
import backgroundImage from "../Assets/Images/about-2.jpg"; // Adjust the path according to your project structure

export default function About() {
  return (
    <Box>
      {/* Background Image Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image here
          backgroundSize: "cover", // Ensures the background image covers the entire section
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the background image from repeating
          height: "400px", // Adjust the height of the section
          display: "flex",
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
          color: "white", // Text color if you have any content on top of the background
        }}
      >
        <Typography variant="h4">About Us</Typography> {/* Example of text that could be on the background */}
      </Box>

      {/* About Content Section */}
      <Box>
        <AboutContent />
      </Box>

      {/* Banner Section */}
      <Box>
        <Banner />
      </Box>
    </Box>
  );
}
