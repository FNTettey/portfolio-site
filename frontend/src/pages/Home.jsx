import * as React from "react";
import { Container, Typography, Grid, Box, Link, IconButton, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";


const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function Home() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API_BASE}/api/projects`).then(r => r.json()).then(setProjects).catch(console.error);
  }, []);

  return (
    <>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ flex: 1.2, minWidth: 300 }}>
              <Typography variant="h1" color="primary.main" >Francis Tettey</Typography>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Tooltip title="Email me">
                  <IconButton
                    component="a"
                    href="mailto:fnt.tettey@gmail.com"
                    aria-label="Email"
                    color="primary"
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Connect on LinkedIn">
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/fntettey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    color="primary"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View my Github">
                  <IconButton
                    component="a"
                    href="https://github.com/FNTettey/portfolio-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    color="primary"
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                </Tooltip>

              </Box>
              <Typography variant="h3" gutterBottom>About Me</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                My name is Francis Tettey, and I am a final-year Software Engineering student at the University of Leicester. As of September 2025,
                I completed a year-long industrial placement at Sand Technologies where I worked on a team that developed a full-stack application.
                <br /><br />
                Our tech stack included React.js and RestJS for the frontend, FastAPI for a scalable Python-based backend, and PostGIS for relational and geospatial data management.
                We also used KeplerGL and GeoServer for data visualisation.
                <br /><br />
                Notable achievements during my internship include implementing several frontend design refreshes, earning an AWS Cloud Practitioner certification,
                and migrating the application's user management from Keycloak to AWS Cognito. I also significantly improved my debugging skills and my ability to explain technical issues clearly.
                <br /><br />
                My current goal is to graduate with first-class honours and begin a career as a full-stack software engineer.
                <br /><br />

              </Typography>

            </Box>
            <Box sx={{ flex: 1, minWidth: 300, marginTop: 5 }}>
              <img
                src={`${API_BASE}/static/headshot.jpg`}
                alt="Francis Tettey"
                style={{ width: "100%", maxWidth: 500, borderRadius: 16 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}