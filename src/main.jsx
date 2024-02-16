// Code for the main app
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Import Roboto font and CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Import CSS
import "./index.css";
// Import MUI components
import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
// Render the main app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);