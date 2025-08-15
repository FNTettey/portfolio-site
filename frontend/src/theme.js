// frontend/src/theme.js
import { createTheme } from "@mui/material/styles";
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#bed5d9" : "#043a43",
      },
      primary: {
        main: mode === "light" ? "#5c0a28ff" : "#d70b56ff",
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: '"Times New Roman", Serrif',
    },
  });

export default getTheme;
