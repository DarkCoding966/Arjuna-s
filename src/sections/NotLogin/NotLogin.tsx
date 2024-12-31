import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import PeopleIcon from "@mui/icons-material/People";
import StorageIcon from "@mui/icons-material/Storage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Usables/Chatbot";
import { useState } from "react";
import NotLoggedInDrawer from "./Drawer";

export default function NotLogin() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);  // Toggle drawer state
  };

  const iconStyle = { fontSize: 50, color: "#3b82f6" };  // Larger icons for better visibility
  const buttonStyles = {
    px: 5,
    py: 1.5,
    borderColor: "#000",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "30px",  // Rounded buttons for a modern feel
    "&:hover": { backgroundColor: "#fff", color: "#000" },
  };

  return (
    <>
    <div style={{paddingBottom:'50px'}}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#111", boxShadow: 3 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#3b82f6",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
                M
              </Typography>
            </Box>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
            Info India
          </Typography>
          {['Home', 'How it works', 'FAQ', 'Pricing'].map((text) => (
            <Button key={text} color="inherit" sx={{ fontWeight: 500 }}>
              {text}
            </Button>
          ))}
          <Button
            variant="outlined"
            sx={{
              ml: 2,
              borderColor: "#fff",
              color: "#fff",
              borderRadius: "30px",  // Rounded corners
              "&:hover": { backgroundColor: "#fff", color: "#000" },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container>
        <Grid container alignItems="center" spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Access Government Data, Simplified and Centralized
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Explore detailed insights into crime rates, political cases,
              national wealth, and budgets with ease. We bring all essential
              government data to your fingertips, securely and transparently.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2, px: 5, py: 1.5, borderRadius: "30px" }} onClick={handleDrawerToggle}>
                Get Started         
                 </Button>
              <Button variant="outlined" sx={buttonStyles}>
                Request a Demo
              </Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ ml: { md: 10 } }}>
              <img
                src="http://findicons.com/files/icons/1161/hp_dock/512/folder.png"
                alt="Representation of government data folder"
                style={{ maxWidth: "100%", borderRadius: "12px" }}  // Added rounded corners
              />
            </Box>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ textAlign: "center", py: 4 }}>
          {[{
            icon: <PeopleIcon sx={iconStyle} />, label: "1M+", subLabel: "Active Users"
          }, {
            icon: <StorageIcon sx={iconStyle} />, label: "5TB+", subLabel: "Files Stored"
          }, {
            icon: <CloudUploadIcon sx={iconStyle} />, label: "6M+", subLabel: "Uploaded Files"
          }].map(({ icon, label, subLabel }) => (
            <Grid item xs={12} sm={4} key={label}>
              {icon}
              <Typography variant="h6" fontWeight="bold">
                {label}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {subLabel}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <div style={{ paddingBottom: "50px" }}>
        <Container>
          {/* Why Choose Info India Section */}
          <Container sx={{ py: 6, backgroundColor: "#f4f4f4", borderRadius: "12px" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
              color="#111"
            >
              Why Choose Info India?
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="textSecondary"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Unlock a world of reliable, centralized government data at your fingertips.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  title: "Comprehensive Data",
                  description:
                    "Access crime rates, budgets, and political insights all in one place, ensuring you stay informed.",
                  icon: <StorageIcon sx={iconStyle} />,
                },
                {
                  title: "User-Friendly Interface",
                  description:
                    "Navigate effortlessly with an intuitive and clean design tailored for all users.",
                  icon: <PeopleIcon sx={iconStyle} />,
                },
                {
                  title: "Secure & Reliable",
                  description:
                    "Your data privacy is our priority, with top-notch security measures in place.",
                  icon: <CloudUploadIcon sx={iconStyle} />,
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "15px",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                      padding: "30px",
                      textAlign: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {feature.icon}
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* What Our Users Say Section */}
          <Box sx={{ py: 6, backgroundColor: "#e8f5e9", borderRadius: "12px", mt: 6 }}>
            <Container>
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
                color="#2e7d32"
              >
                What Our Users Say
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                color="textSecondary"
                gutterBottom
                sx={{ mb: 4 }}
              >
                Discover how Info India has transformed the way users access and understand data.
              </Typography>
              <Grid container spacing={4}>
                {[
                  {
                    quote:
                      "Info India has been a game-changer in how I access government data!",
                    author: "Rajesh K.",
                  },
                  {
                    quote:
                      "The platform is incredibly user-friendly and informative, making my research much easier.",
                    author: "Anjali M.",
                  },
                  {
                    quote:
                      "A must-have tool for anyone who needs accurate and reliable government data.",
                    author: "Vivek P.",
                  },
                ].map((testimonial, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ mb: 2, fontStyle: "italic" }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="#2e7d32"
                      >
                        - {testimonial.author}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      </div>
      </Container>
      <Chatbot/>
    </div>
      <Footer />
        {/* Drawer component */}
        <NotLoggedInDrawer toggle={handleDrawerToggle} open={drawerOpen}/>
      </>
  );
}
