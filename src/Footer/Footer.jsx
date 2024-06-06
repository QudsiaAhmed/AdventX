import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0C2263",
        color: "white",
        padding: "10px 5%",
        mt: "4%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://adventx.ai/wp-content/uploads/2024/04/cropped-image-19-1024x241.png"
              alt="AdventX Logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <Typography
              variant="body2"
              noWrap
              sx={{ fontFamily: "prompt", fontSize: "1rem" }}
            >
              Copyright (c) 2024 AdventX - All rights reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              variant="body2"
              sx={{
                marginRight: "20px",
                fontFamily: "prompt",
                fontSize: "1rem",
              }}
              noWrap
            >
              Follow the AI Innovation in Cyber Security
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#3b5998",
                  borderRadius: "50%",
                }}
              >
                <FacebookIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#E4405F",
                  borderRadius: "50%",
                }}
              >
                <InstagramIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "50%",
                }}
              >
                <TwitterIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#0e76a8",
                  borderRadius: "50%",
                }}
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
