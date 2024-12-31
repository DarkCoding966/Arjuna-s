import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavbarProps {
  toggleDrawer: () => void;
  isMobile: boolean;
}

export function Navbar({ toggleDrawer, isMobile }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  //   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#f5f5f5", 
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          height: "7.5rem",
          color: "black",
          zIndex:"10"
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Left Section: Logos */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://mpa.gov.in/sites/all/themes/mpa/images/emblem-dark.png"
              alt="National Emblem"
              style={{ height: "50px", marginRight: "16px" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                संसदीय कार्य मंत्रालय
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", color: "gray" }}
              >
                Ministry of Parliamentary Affairs
              </Typography>
            </Box>
          </Box>

          {/* Right Section: Navigation Links */}
          <Box
            sx={{ display: isMobile ? "none" : "flex", alignItems: "center" }}
          >
            <Link
              href="/"
              sx={{
                marginRight: 3,
                color: "black",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              sx={{
                marginRight: 3,
                color: "black",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
            <Link
              href="/services"
              sx={{
                marginRight: 3,
                color: "black",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              sx={{
                marginRight: 3,
                color: "black",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              href="/documents"
              sx={{
                marginRight: 3,
                color: "black",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Documents
            </Link>
          </Box>

          {/* Swachh Bharat Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://mpa.gov.in/sites/all/themes/cmf/images/swach-bharat.png"
              alt="Swachh Bharat"
              style={{ height: "100px", marginLeft: "16px" }}
            />
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: isMobile ? "block" : "none" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown Menu for Mobile */}
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/" sx={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/about"
                sx={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/services"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Services
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                href="/contact"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
