import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Navbar from "../Navbar/Navbar";

const AnimatedButton = styled(Button)(({ theme }) => ({
  "--color": "#D2AC47",
  cursor: "pointer",
  position: "relative",
  padding: "10px 20px",
  color: "#fff",
  textDecoration: "none",
  overflow: "hidden",
  transition: "0.5s",
  marginTop: "40px",
  letterSpacing: "4px",
  fontSize: "19px",
  fontWeight: "bold",
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
    boxShadow: "0 0 20px #D2AC47, -10px 0 40px #D2AC47, 10px 0 40px #D2AC47",
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

  "@keyframes btn-anim1": {
    "0%": { left: "-100%" },
    "50%, 100%": { left: "100%" },
  },

  "@keyframes btn-anim2": {
    "0%": { top: "-100%" },
    "50%, 100%": { top: "100%" },
  },

  "@keyframes btn-anim3": {
    "0%": { right: "-100%" },
    "50%, 100%": { right: "100%" },
  },

  "@keyframes btn-anim4": {
    "0%": { bottom: "-100%" },
    "50%, 100%": { bottom: "100%" },
  },
}));

const MainBody = () => {
  return (
    <>
      <Navbar />
      <Box position="relative">
        <img
          src="https://adventx.ai/wp-content/uploads/2024/04/wepik-export-20240416085924xK2N-YF30EpbBq-transformed.png"
          style={{ height: "90vh", width: "100%" }}
        />
        <Box
          position="absolute"
          top={{ xs: "15%", sm: "20%", md: "25%" }}
          left={{ xs: "5%", sm: "10%", md: "15%", lg: "10%" }}
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          p={2}
          borderRadius={1}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: "600",
              fontFamily: "prompt",
            }}
          >
            WELCOME TO AI-POWERED <br />
            CYBERSECURITY MARKETPLACE FOR
            <br /> YOUR{" "}
            <span style={{ color: "#D2AC47", fontFamily: "prompt" }}>
              360 PROTECTION
            </span>
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              mt: "2%",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: "400",
              fontFamily: "prompt",
            }}
          >
            Build resilience against cyber threats and ensure continuity in the
            face of adversity with our robust AI-
            <br />
            Powered cybersecurity services and solutions
          </Typography>
          <AnimatedButton>
            Explore Further
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </AnimatedButton>
        </Box>
      </Box>
    </>
  );
};

export default MainBody;
