import * as React from "react";
import { Container, Typography, Stack, Chip, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function Project() {
  const { slug } = useParams();
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    fetch(`${API_BASE}/api/projects/${slug}`).then(r => r.json()).then(setProject).catch(console.error);
  }, [slug]);

  if (!project) return null;

  const downloadUrl = project?.download
    ? (project.download.startsWith("/") ? `${API_BASE}${project.download}` : project.download)
    : null;

  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h3" gutterBottom>{project.title}</Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
        {project.tags?.map(t => <Chip key={t} label={t} size="small" />)}
        {downloadUrl && (
          <Button href={downloadUrl} variant="contained" size="small" target="_blank" rel="noreferrer" download>
            Download ZIP
          </Button>
        )}
      </Stack>
      {project.image && (
        <img
          src={project.image.startsWith("/") ? `${API_BASE}${project.image}` : project.image}
          alt={project.title}
          style={{ width: "100%", borderRadius: 8 }}
        />
      )}
      <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
        {project.content}
      </Typography>
    </Container>
  );
}