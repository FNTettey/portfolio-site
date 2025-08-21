import * as React from "react";
import { Container, Typography, Stack, Chip, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";


const urlFor = (p) => {
  if (!p) return null;
  if (/^https?:\/\//i.test(p)) return p;
  if (p.startsWith("/")) return `${API_BASE}${p}`;
  return `${API_BASE}/${p.replace(/^\.?\//, "")}`;
};

export default function Project() {
  const { slug } = useParams();


  const [project, setProject] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [useGif, setUseGif] = React.useState(true);


  React.useEffect(() => {
    if (!slug) return;

    const ctrl = new AbortController();
    setStatus("loading");
    setErrorMsg("");
    setProject(null);

    (async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/projects/${encodeURIComponent(slug)}`,
          { signal: ctrl.signal, headers: { Accept: "application/json" } }
        );
        if (res.status === 404) { setStatus("notfound"); return; }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProject(data);
        setStatus("ok");

      } catch (e) {
        if (e.name !== "AbortError") {
          setStatus("error");
          setErrorMsg(e.message || "Request failed");
        }
      }
    })();

    return () => ctrl.abort();
  }, [slug]);


  if (!slug) return <Container maxWidth="md" sx={{ py: 6 }}><Typography>Missing project slug.</Typography></Container>;
  if (status === "loading") return <Container maxWidth="md" sx={{ py: 6 }}><Typography>Loading…</Typography></Container>;
  if (status === "notfound") return <Container maxWidth="md" sx={{ py: 6 }}><Typography>Project not found.</Typography></Container>;
  if (status === "error") return <Container maxWidth="md" sx={{ py: 6 }}><Typography>Something went wrong: {errorMsg}</Typography></Container>;
  if (!project) return null;

  const downloadUrl = urlFor(project.download);
  const gifUrl = urlFor(project.gif);
  const imageUrl = urlFor(project.image);
  const heroUrl = (useGif && gifUrl) ? gifUrl : imageUrl;
  const isVideo = heroUrl && /\.(mp4|webm)$/i.test(heroUrl);

  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h3" gutterBottom>{project.title}</Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
        {project.tags?.map((t) => <Chip key={t} label={t} size="small" />)}
        {downloadUrl && (
          <Button href={downloadUrl} variant="contained" size="small" target="_blank" rel="noreferrer" download>
            Download ZIP
          </Button>
        )}
      </Stack>
      <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
        {project.content}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        {isVideo ? (
          <video
            src={heroUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "1000px",
              borderRadius: 8
            }}
            onError={() => setUseGif(false)}
          />
        ) : (
          <img
            src={heroUrl}
            alt={`${project.title} preview`}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "1000px",
              borderRadius: 8
            }}
            loading="lazy"
            onError={() => setUseGif(false)}
          />
        )}
      </Box>

    </Container>
  );
}
