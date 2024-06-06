import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const drawerWidth = 240;
const navItems = ["About Us", "Services", "AI Solutions", "Team", "Contact Us"];

const AnimatedButton = styled(Button)({
  position: "relative",
  overflow: "hidden",
  transition: "0.5s",
  "&:hover": {
    background: "#D2AC47",
    color: "#fff",
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
    background: "linear-gradient(90deg, transparent, #D2AC47)",
    animation: "btn-anim1 1s linear infinite",
  },
  "@keyframes btn-anim1": {
    "0%": {
      left: "-100%",
    },
    "50%, 100%": {
      left: "100%",
    },
  },
  "& span:nth-of-type(2)": {
    top: "-100%",
    right: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(180deg, transparent, #D2AC47)",
    animation: "btn-anim2 1s linear infinite",
    animationDelay: "0.25s",
  },
  "@keyframes btn-anim2": {
    "0%": {
      top: "-100%",
    },
    "50%, 100%": {
      top: "100%",
    },
  },
  "& span:nth-of-type(3)": {
    bottom: 0,
    right: "-100%",
    width: "100%",
    height: "2px",
    background: "linear-gradient(270deg, transparent, #D2AC47)",
    animation: "btn-anim3 1s linear infinite",
    animationDelay: "0.5s",
  },
  "@keyframes btn-anim3": {
    "0%": {
      right: "-100%",
    },
    "50%, 100%": {
      right: "100%",
    },
  },
  "& span:nth-of-type(4)": {
    bottom: "-100%",
    left: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(360deg, transparent, #D2AC47)",
    animation: "btn-anim4 1s linear infinite",
    animationDelay: "0.75s",
  },
  "@keyframes btn-anim4": {
    "0%": {
      bottom: "-100%",
    },
    "50%, 100%": {
      bottom: "100%",
    },
  },
});

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          height: 80,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              component="img"
              src="https://adventx.ai/wp-content/uploads/2024/04/cropped-image-19-1024x241.png"
              alt="Logo"
              sx={{ height: 60, width: 120, ml: 2 }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <React.Fragment key={item}>
                {item === "Contact Us" ? (
                  <AnimatedButton sx={{ color: "#fff" }}>
                    {item}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </AnimatedButton>
                ) : (
                  <Button sx={{ color: "#fff" }}>
                    {item}
                    {(item === "Services" || item === "AI Solutions") && (
                      <ExpandMoreIcon sx={{ ml: 1 }} />
                    )}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
