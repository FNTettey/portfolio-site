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
                My name is Francis Tettey, and I recently graduated from the University of Leicester with First Class Honours in Software Engineering. In September 2025, I completed a year-long industrial placement at Sand Technologies, where I worked on a team developing a full-stack application.
                <br /><br />

                Our tech stack included React.js and RestJS for the frontend, FastAPI for a scalable Python-based backend, and PostGIS for relational and geospatial data management. We also used KeplerGL and GeoServer for data visualisation.
                <br /><br />

                Notable achievements during my placement include implementing several frontend design refreshes, earning an AWS Cloud Practitioner certification, and migrating the application's user management from Keycloak to AWS Cognito. I also significantly improved my debugging skills and my ability to explain technical issues clearly.
                <br /><br />

                For my final-year project, I designed and developed <strong>Interview Atlas</strong>, a full-stack forum application that helps graduates prepare for job interviews by sharing real interview questions and experiences. The application was built with React, Express.js, PostgreSQL, Docker, and Firebase Authentication, and features advanced functionality such as duplicate question detection and question suggestion based on semantic similarity search using vector embeddings, role-based access control, content moderation, notifications, and AI-assisted tagging. The project strengthened my full-stack development skills while giving me valuable experience designing scalable software architectures and solving complex technical challenges.
                <br /><br />

                I am now looking to begin my career as a software engineer, where I can continue building impactful software while learning from experienced engineers and tackling challenging technical problems.
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