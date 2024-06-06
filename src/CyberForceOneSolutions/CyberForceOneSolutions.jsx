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
    title: "AI CyberMentor",
    description1:
      "Introducing AI CyberMentor, offering personalized program for your professional  growth in Cyber Security. AI CyberMentor is designed to assist individuals (students and professionals alike) in identifying their interests, skill gaps and developing a tailored career development plan.",
    description2:
      "Our platform analyses your unique strengths, interests, aspirations, profiles and recommends a customized professional development plan covering training and certification requirements aligned with industry best practices such as NIST NICE and SCYWF. ",
    description3:
      "Embark on a journey today for your professional growth with confidence that is specifically developed to meet your career goals in line with market demands with our AI-Powered solution – CyberMentor. As part of the program, you get services including 1. Career assessments 2. Career development plan 3. Training with Certifications 4. Career Profiling  5. Personal statement / CV support 6. University selection support 7. Interview support..",

    image: "https://adventx.ai/wp-content/uploads/2024/04/1004.png",
  },
  {
    id: 2,
    title: "AI CISO",
    description1:
      "AI CISO is a companion for CISOs and Cybersecurity Teams for developing Cybersecurity Strategy, vision, mission, security principles, cyber risk appetite and operationalizing of Cybersecurity Strategy throughout the organization including its validation and approval from board and senior management. AI CISO conducts periodic Cyber maturity checks, identifies current maturity level and automatically develops roadmap based on identified gaps and target maturity level for People, Processes and Technologies covering domains like Strategy, Architecture, Governance, Risk Management, Compliance Management, Audit Management, Assurance, Vendors / 3rd Party Risk Management,  Software and Systems Development, Identity and Access Management, Infrastructure Security, Endpoint and Mobile Security, Data Protection and Privacy, Cyber Defense and Intelligence, Asset Management, Business Continuity and Disaster Recovery in line with International Standards e.g. ISO 27001, NIST SP 800-53, NIST CSF, ISF.",
    description2:
      "AI CISO develops Cyber Risk heatmaps, Cyber maturity check reports, Cybersecurity Strategy roadmaps covering Cyber initiatives, Cybersecurity strategic KPIs, Cybersecurity balanced scorecard, Budgetary estimates (CAPEX, OPEX) and many more features for Executives, CISOs, Cybersecurity teams including teams’ performance and Cybersecurity programs management.",
    image: "https://adventx.ai/wp-content/uploads/2024/04/1010.png",
  },
  {
    id: 3,
    title: "AI Securnatica",
    description1:
      "AI Securnatica is an AI-Powered Cybersecurity solution which assist Cybersecurity teams in developing end-to-end cybersecurity capabilities based on International best practices and Industry standards. It develops tailored Cybersecurity frameworks, procedures, policies, and technical designs documents for effectively operationalizing and managing cybersecurity capabilities in the organization. ",
    image: "https://adventx.ai/wp-content/uploads/2024/04/1002.png",
  },
  {
    id: 4,
    title: "AI RiskGuard",
    description1:
      "Introducing AI RiskGuard, the cutting-edge solution for proactive risk management in today’s ever-evolving cyber landscape. Harnessing the power of artificial intelligence, AI RiskGuard offers a comprehensive suite of services designed to safeguard your organization’s digital assets in line with your defined risk appetite.",
    description2:
      "With AI RiskGuard, you can confidently navigate the complexities of cybersecurity risk management. Our advanced algorithms continuously monitor and analyze threats, enabling early detection and swift response to potential breaches. From identifying vulnerabilities to implementing mitigation strategies, AI RiskGuard empowers your organization to stay ahead of emerging risks.",
    description3:
      "Experience peace of mind knowing that AI RiskGuard is at the forefront of protecting your business from cyber threats. With its intelligent risk management capabilities, you can focus on driving innovation and growth while we keep your digital assets safe and secure. Trust AI RiskGuard to be your trusted partner in cybersecurity risk management.",

    image: "https://adventx.ai/wp-content/uploads/2024/04/1001.png",
  },
  {
    id: 5,
    title: "AI ComplyForge",
    description1:
      "AI-Powered ComplyForge solution measures, monitors and reports Cyber Security Compliance posture in real time. This solution offers features like activating preventive controls with defense in depth model when any of the controls fail within the organization empowering Compliance Excellence. It is your all-in-one solution for proactive cyber compliance management. With AI ComplyForge, we revolutionize the way your organization approaches compliance, providing comprehensive tools and proactive measures to ensure regulatory adherence.",
    description2:
      "Our platform offers customizable compliance frameworks tailored to your industry’s unique requirements, coupled with automated monitoring and reporting capabilities. By activating preventive controls, AI ComplyForge empowers your organization to stay ahead of compliance challenges, mitigating risks before they escalate.",
    description3:
      "Experience peace of mind knowing that AI ComplyForge is your dedicated partner in compliance excellence, guiding your organization towards seamless regulatory compliance and safeguarding your reputation in today’s dynamic business environment.",

    image: "https://adventx.ai/wp-content/uploads/2024/04/1008.png",
  },
];

const CyberForceOneSolutions = () => {
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
        Tailored AI-Powered Cyber Force One Solution
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
              {service.description3}
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

export default CyberForceOneSolutions;
