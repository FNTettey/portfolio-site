import * as React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

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
              <Typography variant="h1" color="primary.main" gutterBottom >Francis Tettey</Typography>
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
                Feel free to reach out — you can email me at <Link href="mailto:fnt.tettey@gmail.com">fnt.tettey@gmail.com</Link> or connect on
                <Link href="https://www.linkedin.com/in/fntettey" target="_blank" rel="noopener noreferrer"> LinkedIn</Link>.
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