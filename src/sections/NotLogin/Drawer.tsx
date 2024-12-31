import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";

interface NotLoggedInDialogProps {
  toggle: () => void;
  open: boolean;
}

const NotLoggedInDialog: React.FC<NotLoggedInDialogProps> = ({ toggle, open }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  };

  const handleAgree = (): void => {
    if (!checked) {
      alert("You must agree to all conditions before proceeding!");
    } else {
      alert("Logged In Successfully");
      toggle()
      navigate("/home")
    }
  };

  const handleDisagree = (): void => {
    alert("You need to agree to the terms and conditions to use this platform.");
    toggle();
  };

  return (
    <Dialog
      open={open}
      onClose={toggle}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 10,
          padding:1,
          backgroundColor: "#fdfdfd",
          boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      {/* Dialog Title */}
      <DialogTitle>
        <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", color: "#2C3E50" }}>
          Terms and Conditions
        </Typography>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" paragraph>
            Please review the following terms and conditions carefully:
          </Typography>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>All personal information provided must be accurate and up-to-date.</li>
            <li>Users are solely responsible for maintaining the confidentiality of their login credentials.</li>
            <li>Any misuse of the platform, including sharing sensitive content, is strictly prohibited.</li>
            <li>By using this platform, you agree to adhere to applicable laws and regulations.</li>
            <li>The platform is not liable for any loss or damage resulting from user negligence.</li>
            <li>We reserve the right to modify terms and conditions without prior notice.</li>
            <li>Unauthorized access or activities may lead to account suspension or legal action.</li>
            <li>By clicking "Agree," you consent to comply with all the terms mentioned above.</li>
          </ul>
        </Box>

        {/* Agree Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label="I have read and agree to the terms and conditions."
          sx={{
            display: "block",
            textAlign: "center",
            mb: 3,
          }}
        />
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions sx={{ justifyContent: "space-between", px: 3 }}>
        <Button
          onClick={handleDisagree}
          variant="outlined"
          color="error"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Disagree
        </Button>
        <Button
          onClick={handleAgree}
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#007BFF",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotLoggedInDialog;
