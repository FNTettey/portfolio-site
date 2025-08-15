import * as React from "react";
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from "@mui/material/styles";

export default function NavBar({ toggleColorMode }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const navItems = [
    { label: "Homepage", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "CV", path: "/cv" },
    { label: "Certifications", path: "/certifications" },
  ];

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="80%" sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
              alignItems: "center",
              fontFamily: "'Permanent Marker', cursive"
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
                  transition: "text-decoration 0.2s",
                  fontFamily: "'Permanent Marker', cursive",
                  '&:hover': {
                    textDecoration: "underline",
                    color: "primary.main",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
            <IconButton onClick={toggleColorMode} sx={{ ml: 2, fontSize: "6rem" }} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
