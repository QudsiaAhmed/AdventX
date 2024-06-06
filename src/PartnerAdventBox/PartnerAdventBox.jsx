import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

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

const PartnerAdventBox = () => {
  return (
    <Box
      sx={{
        mt: "4%",
        position: "relative",
        "@media (max-width:600px)": {
          // Small devices (phones, 600px and up)
          mt: "10%",
        },
        "@media (min-width:601px) and (max-width:1024px)": {
          // Medium devices (tablets, 601px and up)
          mt: "6%",
        },
      }}
    >
      <img
        src="https://adventx.ai/wp-content/uploads/2024/04/wepik-export-202404161311225fkr-transformed.png"
        alt="Partner Ad"
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          boxShadow:
            "15px 15px 51px 29px rgba(18.917119565217384, 102.06307966091686, 153, 0.5)",
          filter: "blur(0.7px)",
          height: "32vh",
          width: "60%",
          "@media (max-width:600px)": {
            // Small devices (phones, 600px and up)
            width: "90%",
          },
          "@media (min-width:601px) and (max-width:1024px)": {
            // Medium devices (tablets, 601px and up)
            width: "80%",
          },
        }}
      >
        <Typography
          sx={{
            mt: "6%",
            fontFamily: "prompt",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Partner with AdventX
          <br /> Imagine the unimaginable! /
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatedButton>
            Partner With Us
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </AnimatedButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerAdventBox;
