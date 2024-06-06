import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import One from "../Images/One.png";
import Two from "../Images/Two.png";
import Three from "../Images/Three.png";
import Four from "../Images/Four.png";
import Five from "../Images/Five.png";
import Six from "../Images/Six.png";
const AnimatedButton = styled(Button)(({ theme }) => ({
  "--color": "rgb(65,105,225)",
  cursor: "pointer",
  position: "relative",
  padding: "10px 20px",
  color: "rgb(65,105,225)",
  textDecoration: "none",
  overflow: "hidden",
  transition: "0.5s",
  letterSpacing: "4px",
  marginTop: "4%",
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
    boxShadow:
      "0 0 20px rgb(65,105,225), -10px 0 40px rgb(65,105,225), 10px 0 40px rgb(65,105,225)",
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

const content = [
  {
    imgSrc: One,
    heading: "AdventX Expertise",
    description:
      "Our AI-Powered services and solutions are designed by industry-leading cybersecurity professionals with years of hands-on experience and deep technical knowledge. We bring a wealth of expertise to the table, ensuring that your cybersecurity needs are addressed with precision and efficiency",
  },
  {
    imgSrc: Two,
    heading: "AI-Powered Cybersecurity Services And Solutions",
    description:
      "We don't believe in one-size-fits-all approach. Instead, our AI-Powered cyberscurity services and Solutions understand your organization's unique requirements, challenges, and objectives. These solutions are meticulously crafted to align with your specific needs, ensuring maximum effectiveness and value.",
  },
  {
    imgSrc: Three,
    heading: "Proactive Approach",
    description:
      "In today's rapidly evolving threat landscape, reactive cybersecurity measures are no longer sufficient. That's why we prioritize a proactive approach, turning risks into results and staying ahead of emerging threats and vulnerabilities to keep your organization safe and secure.",
  },
  {
    imgSrc: Four,
    heading: "Enable Business Performance",
    description:
      "We understand that cybersecurity isn't just about mitigating risks—it's also about enabling business performance. Our solutions are designed to support your organization's growth and innovation, providing a secure foundation for achieving your business goals in line with Risk Appetite.",
  },
  {
    imgSrc: Five,
    heading: "Mitigate Risks",
    description:
      "With our comprehensive risk management service and solution, we identify, assess, and mitigate risks across your organization's digital landscape. From proactive threat intelligence to robust security controls, we empower you to effectively manage risks and protect your assets.",
  },
  {
    imgSrc: Six,
    heading: "Optimize Cost Efficiency",
    description:
      "We're committed to helping you achieve cost efficiency by reducing unnecessary expenditures and optimizing your cybersecurity investments. Our solutions are designed to maximize ROI, ensuring that you get the most value out of budget spent on cybersecurity.",
  },
];

const AboutUs = () => {
  const [hoveredGrid, setHoveredGrid] = useState(null);
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedButton>
          About Us
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </AnimatedButton>
      </Box>

      <Typography
        sx={{
          fontSize: "2.5rem",
          fontFamily: "prompt",
          fontWeight: "600",
          textAlign: "center",
          mt: "2%",
          color: "rgb(65,105,225)",
        }}
      >
        Your Trusted Marketplace For All Cyber Security Needs
      </Typography>
      <Typography
        sx={{
          fontFamily: "prompt",
          textAlign: "center",
          fontSize: "1.1rem",
          mt: "1%",
        }}
      >
        AdventX AI-Powered Cybersecurity services and solutions bring value
        addition as outlined below
      </Typography>
      <Box sx={{ ml: "5%", mr: "5%" }}>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {content.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  color: "rgb(65,105,225)",
                  fontFamily: "prompt",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  borderLeft:
                    hoveredGrid !== index ? "4px solid #D2AC47" : "none",
                  borderBottom:
                    hoveredGrid !== index ? "4px solid #D2AC47" : "none",
                  borderRight:
                    hoveredGrid === index ? "4px solid #D2AC47" : "none",
                  borderTop:
                    hoveredGrid === index ? "4px solid #D2AC47" : "none",
                  transition: "border-color 0.3s ease-in-out",
                }}
                onMouseEnter={() => setHoveredGrid(index)}
                onMouseLeave={() => setHoveredGrid(null)}
              >
                <Box>
                  <img
                    src={item.imgSrc}
                    alt={`Icon ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography
                    // variant="h6"
                    sx={{
                      fontFamily: "prompt",
                      fontWeight: "bold",
                      mb: 1,
                      mt: 1,
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "prompt",
                      color: "black",
                      mt: "1%",
                      lineHeight: "2.8rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
