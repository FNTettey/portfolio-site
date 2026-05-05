import * as React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API_BASE}/api/projects`).then(r => r.json()).then(setProjects).catch(console.error);
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        bgcolor: "background.default",
        width: "100%",
        mx: "auto",
      }}
    >
      <Typography variant="h4" color="primary.main" pb="10px" gutterBottom>
        All Projects
      </Typography>

      <Grid2 container spacing={3}>
        {projects.map((p) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={p.slug}>
            <ProjectCard project={p} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}