import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  width: "100px",
  height: "40px",
  borderRadius: "25px",
});

const keyframes = {
  btnAnim1: {
    "0%": { left: "-100%" },
    "50%, 100%": { left: "100%" },
  },
  btnAnim2: {
    "0%": { top: "-100%" },
    "50%, 100%": { top: "100%" },
  },
  btnAnim3: {
    "0%": { right: "-100%" },
    "50%, 100%": { right: "100%" },
  },
  btnAnim4: {
    "0%": { bottom: "-100%" },
    "50%, 100%": { bottom: "100%" },
  },
};

const AnimatedButton = styled(Button)(({ theme }) => ({
  "--color": "#D2AC47",
  cursor: "pointer",
  position: "relative",
  padding: "10px 20px",
  color: "#fff",
  textDecoration: "none",
  overflow: "hidden",
  transition: "0.5s",
  letterSpacing: "4px",
  marginTop: "3%",
  fontFamily: "prompt",
  fontSize: "19px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  backgroundColor: "transparent",
  border: "none",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "var(--color)",
    color: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 20px #D2AC47, -10px 0 40px  #D2AC47, 10px 0 40px  #D2AC47",
  },

  "& span": {
    position: "absolute",
    display: "block",
  },

  "& span:nth-of-type(1)": {
    top: 0,
    left: "-100%",
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, var(--color))",
    animation: "btn-anim1 1s linear infinite",
  },

  "& span:nth-of-type(2)": {
    top: "-100%",
    right: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(180deg, transparent, var(--color))",
    animation: "btn-anim2 1s linear infinite",
    animationDelay: "0.25s",
  },

  "& span:nth-of-type(3)": {
    bottom: 0,
    right: "-100%",
    width: "100%",
    height: "2px",
    background: "linear-gradient(270deg, transparent, var(--color))",
    animation: "btn-anim3 1s linear infinite",
    animationDelay: "0.5s",
  },

  "& span:nth-of-type(4)": {
    bottom: "-100%",
    left: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(360deg, transparent, var(--color))",
    animation: "btn-anim4 1s linear infinite",
    animationDelay: "0.75s",
  },

  "@keyframes btn-anim1": keyframes.btnAnim1,
  "@keyframes btn-anim2": keyframes.btnAnim2,
  "@keyframes btn-anim3": keyframes.btnAnim3,
  "@keyframes btn-anim4": keyframes.btnAnim4,
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#fff",
  "& .MuiSvgIcon-root": {
    fontSize: 28,
    color: "#fff",
  },
  "&.Mui-checked": {
    color: "#fff",
  },
  "& .MuiIconButton-root": {
    color: "#fff",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "& .Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const formFields = [
  { label: "Name", ml: "10%" },
  { label: "Designation" },
  { label: "Email", ml: "10%" },
  { label: "Phone Number" },
  { label: "Organization", ml: "10%" },
  { label: "Industry" },
  { label: "Number of Employees", full: true, ml: "5%" },
];

const services = [
  "Cyber Skills Management",
  "Cyber Strategy Management",
  "Cyber Capabilities Management",
  "Cyber Managed Services",
  "Cyber Compliance Management",
];

const solutions = [
  "AI CyberMentor",
  "AI CISO",
  "AI Securnatica",
  "AI RiskGuard",
  "AI ComplyForge",
];

const ContactForm = () => {
  const [checked, setChecked] = useState({});

  const handleCheckboxChange = (name) => {
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#4169E1",
        width: "80%",
        mt: "4%",
        borderRadius: "15px",
        ml: "10%",
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AnimatedButton>
          Contact AdventX
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </AnimatedButton>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "prompt",
          color: "#fff",
          fontSize: "2.8rem",
          fontWeight: "bold",
          mt: 4,
        }}
      >
        Get In Touch With AdventX Today
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "prompt",
          color: "#fff",
          fontSize: "2.8rem",
          fontWeight: "bold",
        }}
      >
        To Start Your Exciting Journey!
      </Typography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {formFields.map(({ label, ml, full }, index) => (
          <Grid item xs={full ? 12 : 6} key={index}>
            <TextField
              fullWidth
              label={label}
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#395BC4",
                color: "#fff",
                border: "1px solid #fff",
                width: full ? "90%" : "90%",
                ml: ml || 0,
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          color: "#fff",
          fontFamily: "prompt",
          fontSize: "1.3rem",
          mt: "1%",
          ml: "5%",
        }}
      >
        Select AdventX services you are interested in.
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", ml: "4%" }}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <StyledCheckbox
              checked={!!checked[service]}
              onChange={() => handleCheckboxChange(service)}
            />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "prompt",
                fontSize: "1rem",
              }}
            >
              {service}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontFamily: "prompt",
          fontSize: "1.3rem",
          mt: "1%",
          ml: "5%",
        }}
      >
        Select AdventX solutions you are interested in.
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", ml: "4%" }}>
        {solutions.map((solution, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <StyledCheckbox
              checked={!!checked[solution]}
              onChange={() => handleCheckboxChange(solution)}
            />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "prompt",
                fontSize: "1rem",
              }}
            >
              {solution}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          sx={{
            width: "90%",
            ml: "5%",
            mt: "2%",
            border: "1px solid white",
            backgroundColor: "#395BC4",
          }}
        />
      </Box>

      <Box display="flex" justifyContent="center" sx={{ mt: "1.8%" }}>
        <StyledButton
          sx={{
            color: "#fff",
            backgroundColor: "#D2AC47",
            textTransform: "none",
            fontFamily: "prompt",
            fontSize: "1rem",
            fontWeight: "500",
            marginBottom: "3%",
            "&:hover": {
              backgroundColor: "#D2AC47",
            },
          }}
        >
          Send
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ContactForm;
