import React from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import MainBody from "./MainBody/MainBody";
import Marquee from "./Marquee/Marquee";
import CyberForceOneServices from "./CyberForceOneServices/CyberForceOneServices";
import CyberForceOneSolutions from "./CyberForceOneSolutions/CyberForceOneSolutions";
import PartnerAdventBox from "./PartnerAdventBox/PartnerAdventBox";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import BaseOffice from "./BaseOffice/BaseOffice";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={scrollToTop}
        style={{
          backgroundColor: "#328CC1",
          color: "#fff",
          borderRadius: "10%",
        }}
      >
        <ArrowUpward />
      </IconButton>
    </div>
  );
}

function App() {
  return (
    <Box>
      <MainBody />
      <Marquee />
      <CyberForceOneServices />
      <CyberForceOneSolutions />
      <PartnerAdventBox />
      <AboutUs />
      <OurTeam />
      <BaseOffice />
      <ContactForm />
      <Footer />

      <ScrollToTopButton />
    </Box>
  );
}

export default App;
