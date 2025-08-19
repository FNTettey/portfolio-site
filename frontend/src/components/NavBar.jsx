import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function NavBar({ toggleColorMode }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navItems = [
    { label: "Homepage", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "CV", path: "/cv" },
    { label: "Certifications", path: "/certifications" },
  ];

  const desktopLinks = (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexGrow: 2,
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "'Permanent Marker', cursive",
      }}
    >
      {navItems.map((item) => (
        <Typography
          key={item.path}
          variant="h3"
          component={RouterLink}
          to={item.path}
          color="inherit"
          sx={{
            textDecoration: "none",
            px: 2,
            transition: "color 0.2s ease, text-decoration-color 0.2s ease",
            fontFamily: "'Permanent Marker', cursive",
            "&:hover": {
              textDecoration: "underline",
              color: "primary.main",
            },
          }}
        >
          {item.label}
        </Typography>
      ))}
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        sx={{ ml: 2, fontSize: "3rem" }}
        color="inherit"
      >
        {isDarkMode ? (
          <LightModeIcon sx={{ fontSize: "inherit" }} />
        ) : (
          <DarkModeIcon sx={{ fontSize: "inherit" }} />
        )}
      </IconButton>
    </Box>
  );

  //  Mobile styling
  const mobileActions = (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
      <IconButton onClick={toggleColorMode} aria-label="Toggle color mode" color="inherit">
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <IconButton onClick={handleDrawerToggle} aria-label="Open navigation menu" edge="end" color="inherit">
        <MenuIcon />
      </IconButton>
    </Box>
  );

  const drawer = (
    <Box
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
      sx={{ width: 260, height: "100%", bgcolor: "background.default" }}
    >
      <Typography
        sx={{ my: 2, textAlign: "center", fontFamily: "'Permanent Marker', cursive" }}
        variant="h6"
      >
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.path} component={RouterLink} to={item.path} sx={{ py: 1.25 }}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={toggleColorMode}>
          <ListItemText primary={isDarkMode ? "Light mode" : "Dark mode"} />
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.default", color: "text.primary" }}>

        <Container
          maxWidth={false}
          sx={{
            maxWidth: { xs: "100%", md: "80%" },
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Toolbar disableGutters sx={{ gap: 1, justifyContent: { xs: "flex-end", md: "center" } }}>
            {desktopLinks}
            {mobileActions}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { bgcolor: "background.default" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
