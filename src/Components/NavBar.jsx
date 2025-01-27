import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from '../Assets/Images/logo.png';
import { MenuItem } from "@mui/material";
import Cart from "../Pages/Cart";
import Order from "../Pages/Order";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Cart", path: "/cart" },
  { title: "Order", path: "/order" }

];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={1} sx={{ backgroundColor: "white", p: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for Desktop and Mobile */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src={logo} // Replace this with your logo's path
              alt="e-commerce logo"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src="/path/to/your/logo.png"  // Replace this with your logo's path
              alt="e-commerce logo"
            />
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#353543",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
