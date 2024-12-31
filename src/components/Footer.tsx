import React from "react";
import { Container, Grid, Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Column 1 - Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#f3f3f3" }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", py: 0.5, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                Home
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", py: 0.5, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                How it Works
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", py: 0.5, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", py: 0.5, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                Pricing
              </Link>
            </Box>
          </Grid>

          {/* Column 2 - Social Media Links */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#f3f3f3" }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" sx={{ mr: 2, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ mr: 2, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ mr: 2, transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ transition: "all 0.3s", '&:hover': { color: "#ff4081" } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 3 - Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#f3f3f3" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Email: <Link href="mailto:support@infoindia.com" color="inherit" underline="hover">support@infoindia.com</Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Phone: <Link href="tel:+18001234567" color="inherit" underline="hover">+1 (800) 123-4567</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            © {new Date().getFullYear()} Info India. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
