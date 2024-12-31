import { useState } from "react";
import { Button, TextField, Paper, Typography, IconButton, Box } from "@mui/material";
import { Iconify } from "../iconify";

export default function Chatbot() {
  // State to control the visibility of the chatbot
  const [showChatbot, setShowChatbot] = useState(false);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      {/* Floating chat icon */}
      <IconButton
        onClick={toggleChatbot}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#007bff",
          color: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          padding: 2,
          "&:hover": {
            backgroundColor: "#0056b3", // Darker background color on hover
          },
        }}
      >
        {/* Chat Icon */}
        <Iconify icon="material-symbols:chat" width={24} height={24} />
      </IconButton>

      {/* Chatbot Section */}
      {showChatbot && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 350,
            height: 450,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" component="h2">
              Chat with us!
            </Typography>
            <Button onClick={toggleChatbot}>
              <Iconify icon="material-symbols:close-small-rounded" width={24} height={24} color={"red"}/>
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              paddingY: 2,
              paddingX: 2,
            }}
          >
            {/* Bot's message */}
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "#e1f5fe",
                borderRadius: "10px",
                marginBottom: "10px",
                maxWidth: "80%",
                marginLeft: "10px",
              }}
            >
              <Typography variant="body1">Hello! How can I assist you today?</Typography>
            </Box>

            {/* User's message */}
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
                marginBottom: "10px",
                maxWidth: "80%",
                marginRight: "10px",
                marginLeft: "auto",
              }}
            >
              <Typography variant="body1">I'm looking for information on your services.</Typography>
            </Box>
          </Box>

          {/* Input Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              borderTop: "1px solid #ddd",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Type your message..."
              fullWidth
              sx={{
                marginRight: 1,
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  backgroundColor: "#f9f9f9",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: 2,
                paddingX: 3,
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  );
}
