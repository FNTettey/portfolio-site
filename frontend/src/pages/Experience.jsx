import * as React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Grid } from "@mui/material";

export default function Experience() {
  const experiences = [
    {
      company: "Sand Technologies",
      title: "Software Engineering Intern",
      location: "London, United Kingdom",
      date: "Sep 2024 – Aug 2025",
      details: [
        "Worked on a team that developed and maintained a full-stack application using React.js, RestJS, FastAPI, PostGIS, KeplerGL, and GeoServer.",
        "Transitioned user management from Keycloak to AWS Cognito.",
        "Improved debugging skills and gained proficiency with SCRUM and technical communication.",
        "Carried out tasks across the full stack, from database to frontend."
      ]
    },
    {
      company: "Sefalana Cash and Carry Limited",
      title: "IT Intern",
      location: "Gaborone, Botswana",
      date: "Jul 2023 – Aug 2023",
      details: [
        "Assisted the IT department at one of Botswana’s largest retail companies.",
        "Supported remote troubleshooting across 100+ stores."
      ]
    },
    {
      company: "Design and Technology Institute",
      title: "IT Assistant",
      location: "Accra, Ghana",
      date: "Jan 2022",
      details: [
        "Formatted PCs, set up a local server, and configured static IPs.",
        "Supported IT infrastructure for a vocational education institute."
      ]
    }
  ];

  const references = [
    {
      name: "Chester Cobus",
      position: "Keystone Software Engineer, Sand Technologies",
      contact: "ccobus@sandtech.com"
    },
    {
      name: "Rahul Singh",
      position: "Enablement Lead - Software Engineering, Sand Technologies",
      contact: "rsingh@sandtech.com"
    },
    {
      name: "Siyavuya Ngudle",
      position: "Techniacal Lead - Software Engineering, Sand Technologies",
      contact: "sngudle@sandtech.com"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h4" color="primary.main" gutterBottom>Experience</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {experiences.map((exp, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Typography variant="h5" color="primary.main">{exp.title} — {exp.company}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{exp.location} | {exp.date}</Typography>
              <List dense>
                {exp.details.map((point, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h5" color="primary.main" gutterBottom>References</Typography>
          {references.map((ref, idx) => (
            <Box key={idx} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="primary.main"><strong>{ref.name}</strong></Typography>
              <Typography variant="body2" color="text.secondary">{ref.position}</Typography>
              <Typography variant="body2" color="text.secondary">{ref.contact}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}