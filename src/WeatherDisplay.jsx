import React from "react";
import { Box, Typography } from "@mui/material";

const WeatherDisplay = ({ weather }) => {
  return (
    <Box
      sx={{
        mt: 2,
        display: "grid",
        gap: 2,
        textAlign: "center",
        justifyContent: "center", // Centrar elementos dentro de la primera Box
      }}
    >
      <Typography variant="h4" component="h2">
        {weather.city}, {weather.country}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          alt={weather.conditionText}
          src={weather.icon}
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <Typography variant="h5" component="h3">
          {weather.temperature} °C
        </Typography>
      </Box>

      <Typography variant="h6" component="h4">
        {weather.conditionText}
      </Typography>
      <Typography variant="h5" component="h3">
        {weather.temperature} °C
      </Typography>
    </Box>
  );
};

export default WeatherDisplay;
