import { Box, Typography } from "@mui/material";
import React from "react";

const BaseOffice = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "prompt",
          fontSize: "2.4rem",
          color: "#4169E1",
          fontWeight: "600",
          mt: "4%",
          mb: "1%",
        }}
      >
        AdventX Base Office
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "prompt",
          fontSize: "2.4rem",
          color: "#4169E1",
          fontWeight: "600",
          width: "95%",
          margin: "0 auto",
          background: "linear-gradient(6deg, #4169E1 0%, #D2AC47 100%)",
          borderRadius: "15px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            textAlign: "left",
            pl: "7%",
            fontFamily: "Prompt",
            fontSize: "1.7rem",
            fontWeight: "500",
            mt: "4%",
            mb: "4%",
          }}
        >
          AdventX with its head office based in London, UK providing
          unparalleled expertise with AI-Powered Cybersecurity services and
          solutions in safeguarding digital assets.
        </Typography>
        <img
          src="https://adventx.ai/wp-content/uploads/2024/04/image-10.png"
          alt="AdventX"
          style={{ width: "100%", height: "30vh", alignSelf: "center" }}
        />
      </Box>
    </Box>
  );
};

export default BaseOffice;
