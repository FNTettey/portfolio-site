import * as React from "react";
import { Container, Typography } from "@mui/material";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5173";

export default function CV() {
  const [cvUrl, setCvUrl] = React.useState(null);

  React.useEffect(() => {
    fetch(`${API_BASE}/api/cv`).then(r => r.json()).then(d => setCvUrl(`${API_BASE}${d.url}`));
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h4" color="primary.main" gutterBottom>Curriculum Vitae</Typography>
      {cvUrl && (
        <iframe
          src={cvUrl}
          title="CV"
          style={{ width: "100%", height: "80vh", border: 0, borderRadius: 8 }}
        />
      )}
    </Container>
  );
}
