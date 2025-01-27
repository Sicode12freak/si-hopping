import { Box, Typography } from "@mui/material";
import React from "react";
import hero from "../Assets/Images/hero.jpg"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${hero})`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to MY Machi Market
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          Emphasize your Unique Styles
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
         Mega-Festival Of Products 
         
        </Typography>
      </Box>
    </Box>
  );
}
