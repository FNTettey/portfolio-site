import * as React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const API_BASE = import.meta.env.VITE_API_BASE;

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    file: `${API_BASE}/static/certifications/aws-cloud-practitioner.pdf`
  },
];

export default function Certifications() {
  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h4" color="primary.main" gutterBottom>Certifications</Typography>
      {certifications.map((cert, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>{cert.name}</Typography>
          <Box sx={{ my: 2 }}>
            <object
              data={cert.file}
              type="application/pdf"
              width="100%"
              height="600px"
              style={{ borderRadius: 8, border: "1px solid #ccc" }}
            >
              <p>Your browser does not support PDFs. <a href={cert.file}>Download the PDF</a>.</p>
            </object>
          </Box>
          <Button variant="outlined" href={cert.file} target="_blank" rel="noopener noreferrer">
            View Full PDF
          </Button>
        </Box>
      ))}
    </Container>
  );
}