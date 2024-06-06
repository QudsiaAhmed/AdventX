import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Seven from "../Images/Seven.png";
import Eight from "../Images/Eight.png";
import Nine from "../Images/Nine.png";

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "6%",
});

const ContentContainer = styled(Box)({
  flex: 1,
  marginRight: "20px",
});

const Image = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

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
  fontSize: "19px",
  marginLeft: "9%",
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
    imgSrc: Seven,
    heading: "Critical Thinking With Problem-Solving Approach",
  },
  {
    imgSrc: Eight,
    heading:
      "Expertise Of Working With Multinational Companies In All Sectors Globally",
  },
  {
    imgSrc: Nine,
    heading: "Over 80 Years Of Combined Industry Experience",
  },
];

const OurTeam = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContentContainer>
              <AnimatedButton>
                Our Team
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </AnimatedButton>
              <Typography
                sx={{
                  ml: "10%",
                  mt: "2%",
                  fontFamily: "prompt",
                  fontSize: "1.1rem",
                  lineHeight: "2.3rem",
                }}
              >
                Our visionary team has a track record of leading complex Cyber
                Security transformation and implementation engagements for
                world’s largest multinational corporations, innovating and
                solving real-world cybersecurity challenges.
              </Typography>
              <Typography
                sx={{
                  ml: "10%",
                  mt: "2%",
                  fontFamily: "prompt",
                  fontSize: "1.1rem",
                  lineHeight: "2.3rem",
                }}
              >
                Highly skilled, trained, and motivated individuals with a
                consulting background at prestigious Big4 companies, our team
                possesses:
              </Typography>
            </ContentContainer>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: { xs: "center", md: "initial" },
            }}
          >
            <img
              src="https://adventx.ai/wp-content/uploads/2024/04/360_F_305166874_qqbLjZpchghJXwUttJIF0bkksR8BkHhR.jpg"
              alt="Team"
              style={{
                width: "90%",
                height: "33vh",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ ml: "4.5%", mr: "6%" }}>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {content.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "prompt",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  background:
                    "linear-gradient(180deg, #CECECE 0%, #D2AC47 100%)",
                }}
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
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.heading}
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

export default OurTeam;
