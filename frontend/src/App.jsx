// frontend/src/App.jsx
import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getTheme from "./theme";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import CV from "./pages/CV";
import Certifications from "./pages/Certifications";

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.background.default,
          },
          html: {
            backgroundColor: theme.palette.background.default,
          },
          "#root": {
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
          },
        })}
      />
      <Router>
        <NavBar toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
