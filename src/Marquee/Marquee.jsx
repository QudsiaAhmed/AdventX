import { Box } from "@mui/material";
import React from "react";

const Marquee = () => {
  const message =
    "At AdventX, we aim to transform Cybersecurity through AI-Powered services and solutions turning risks into opportunities for organizations globally";

  return (
    <Box
      style={{
        background: "linear-gradient(260deg, #4169E1 0%, #D2AC47 100%)",
        color: "#fff",
        fontFamily: "prompt",
        fontSize: "1.6rem",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90px",
        marginTop: "-1%",
        marginBottom: "2%",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .marquee-content {
            display: flex;
            animation: marquee 20s linear infinite;
          }
          .marquee-item {
            display: inline-flex;
            align-items: center;
            margin-right: 50px;
          }
        `}
      </style>
      <Box style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Box className="marquee-content">
          <span className="marquee-item">{message}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Marquee;
