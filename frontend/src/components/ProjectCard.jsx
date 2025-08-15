import * as React from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Chip, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function ProjectCard({ project }) {
  const downloadUrl = project?.download
    ? (project.download.startsWith("/") ? `${API_BASE}${project.download}` : project.download)
    : null;

  return (
    <Card sx={{ height: "100%" }}>
      {project.image && (
        <CardMedia
          component="img"
          height="160"
          image={project.image.startsWith("/") ? `${API_BASE}${project.image}` : project.image} alt={project.title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">{project.summary}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
          {project.tags?.map((t) => <Chip key={t} label={t} size="small" />)}
        </Stack>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/projects/${project.slug}`}>View</Button>
        {downloadUrl && (
          <Button href={downloadUrl} target="_blank" rel="noreferrer" download>
            Download
          </Button>
        )}
        {project.github && <Button href={project.github} target="_blank" rel="noreferrer">GitHub</Button>}
        {project.demo && <Button href={project.demo} target="_blank" rel="noreferrer">Live</Button>}
      </CardActions>
    </Card>
  );
}