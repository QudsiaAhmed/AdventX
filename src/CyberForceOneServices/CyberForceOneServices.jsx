import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useMediaQuery } from "@mui/material";

const AnimatedButton = styled(Button)(({ theme }) => ({
  "--color": "#4169E1",
  cursor: "pointer",
  position: "relative",
  padding: "10px 20px",
  color: "#4169E1",
  textDecoration: "none",
  overflow: "hidden",
  transition: "0.5s",
  letterSpacing: "4px",
  fontSize: "19px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  backgroundColor: "transparent",
  border: "none",
  marginLeft: "10%",
  marginBottom: "3%",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "var(--color)",
    color: "#fff",
    borderRadius: "1px",
    boxShadow: "0 0 20px #4169E1, -10px 0 40px #4169E1, 10px 0 40px #4169E1",
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

const ImageContainer = styled(Box)({
  overflow: "hidden",
  position: "relative",
  "& img": {
    transition: "transform 0.5s ease",
  },
  "&:hover img": {
    transform: "scale(1.1)",
  },
});

const services = [
  {
    id: 1,
    title: "Cyber Skills Management",
    description1:
      "At AdventX, we understand the urgent need for skilled professionals in the ever-evolving field of Cyber Security. Through our state-of-the-art mentorship program, we offer personalized guidance and support to aspiring students and professionals, helping them develop essential skills and advance their careers.",
    description2:
      "Our mentorship program is designed to provide tailored career development plans, focusing on skill enhancement and acquiring the best certifications available in the market in the field of Cyber Security. Join us in bridging the gap in Cyber Security talent by investing in your future with our comprehensive mentorship program. Together, we can empower individuals to meet the demands of the digital age and safeguard the world against evolving cyber threats.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/Group-1171277308.png",
  },
  {
    id: 2,
    title: "Cyber Strategy Management",
    description1:
      "At AdventX, we develop and manage AI-Powered Cybersecurity strategies for our clients. Our AI CISO solution anticipates current and future threats and ensures robust protection for your organization in line with International CyberSecurity Standards and regulations. From formulation to implementation, we guide you in every step of the way, integrating the strategy seamlessly into your daily operations.",
    description2:
      "At the heart of our Strategy Management Services is a focus on identifying your current maturity level and setting the target maturity delivering tangible results. Partner with us to take your Cyber Security strategy to the next level and safeguard your business against ever-evolving threats.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/image-156-2-1.png",
  },
  {
    id: 3,
    title: "Cyber Capabilities Management",
    description1:
      "At AdventX,  we help our clients build robust cybersecurity frameworks across all domains. Our approach covers strategy, risk management, compliance, application security, network security, and more, aligned with International Standards and Best Practices.",
    description2:
      "We collaborate closely with your team to understand your needs, refining processes and aligning technology with your strategy. With a focus on proactive risk management and continuous improvement, we ensure that your security capabilities evolve alongside emerging threats and evolving business requirements. Whether you’re enhancing existing cybersecurity frameworks or starting from scratch, our Security Capabilities Development Services empower your organization to navigate the complex cybersecurity landscape with confidence and resilience.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/image-148.png",
  },
  {
    id: 4,
    title: "Cyber Managed Services",
    description1:
      "Our Cyber Managed Services provide specialized proactive risk management tailored to your organization’s defined risk appetite. Our AI-Powered approach ensures your cybersecurity risks are managed seamlessly in alignment with your strategic objectives and risk tolerance. Through ongoing monitoring, assessment, and mitigation, we protect your organization against emerging threats while staying within established risk appetite with Our state-of-the-art AI-Powered solution.",
    description2:
      "Partner with us to safeguard your business in the face of today’s dynamic cyber threats.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/image-158.png",
  },
  {
    id: 5,
    title: "Cyber Compliance Management",
    description1:
      "With our Cyber Compliance Management Services, we go beyond mere compliance checkboxes. By activating preventive controls, our services minimize the risk of non-compliance and safeguard your organization’s reputation and integrity.",
    description2:
      "Trust our Cyber Compliance Services to navigate the complex terrain of cyber compliance with confidence and ease. With our proactive approach and rigorous oversight we help your organization to remain compliant, resilient, and well-positioned to thrive in today’s regulatory environment.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/image-154.png",
  },
];

const CyberForceOneServices = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ mt: "3%" }}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#4169E1",
          fontFamily: "prompt",
          fontSize: "2.4rem",
          fontWeight: "600",
        }}
      >
        Tailored AI-Powered Cyber Force One Services
      </Typography>

      {services.map((service, index) => (
        <Box
          key={service.id}
          sx={{
            flexDirection: isSmallScreen
              ? "column-reverse"
              : index % 2 === 1
              ? "row-reverse"
              : "row",
            display: "flex",
            justifyContent: "space-between",
            mt: "5%",
            ml: isSmallScreen ? "0%" : index % 2 === 1 ? "5%" : "0%",
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? "100%" : "50%",
              pr: isSmallScreen ? "0%" : "2%",
            }}
          >
            <AnimatedButton
              style={{ marginLeft: isSmallScreen ? "0%" : "10%" }}
            >
              {service.id}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </AnimatedButton>
            <Typography
              variant="h4"
              sx={{
                color: "#4169E1",
                fontFamily: "prompt",
                fontWeight: "600",
                mb: "1rem",
                ml: isSmallScreen ? "0%" : "10%",
                lineHeight: "2rem",
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000",
                fontFamily: "prompt",
                mb: "1rem",
                ml: isSmallScreen ? "0%" : "10%",
                lineHeight: "2.3rem",
                fontSize: "1.3rem",
              }}
            >
              {service.description1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000",
                fontFamily: "prompt",
                ml: isSmallScreen ? "0%" : "10%",
                lineHeight: "2.3rem",
                fontSize: "1.3rem",
              }}
            >
              {service.description2}
            </Typography>
          </Box>
          <ImageContainer sx={{ width: isSmallScreen ? "100%" : "50%" }}>
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "90%",
                height: "auto",
                marginLeft: isSmallScreen ? "5%" : "2%",
                marginTop: isSmallScreen ? "5%" : "10%",
              }}
            />
          </ImageContainer>
        </Box>
      ))}
    </Box>
  );
};

export default CyberForceOneServices;
