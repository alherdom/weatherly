// Import necessary modules
import React from "react";
// Import MUI components
import { Box, Typography } from "@mui/material";
// Import MUI styles
import { darken } from "@mui/material/styles";
// Function component that returns weather data
const WeatherDisplay = ({ weather }) => {
  return (
    // Box component with weather data
    <Box
      sx={{
        mt: 1,
        display: "grid",
        gap: 1,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h2">
        {weather.city}, {weather.country}
      </Typography>
      <Box
        sx={{
          mt: -2,
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
          {" "}
          {weather.temperature}°C
        </Typography>
      </Box>

      <Typography
        variant="h6"
        component="h4"
        sx={{ mt: -2, color: darken("#B63CFE", 0.2), fontWeight: "bold" }}
      >
        {weather.conditionText.toUpperCase()}
      </Typography>
      <Typography variant="h5" component="h3">
        ☁️ Cloud {weather.cloud}%
      </Typography>
      <Typography variant="h5" component="h3">
        💦 Humidity {weather.humidity}%
      </Typography>
      <Typography variant="h5" component="h3">
        🌡️ Temperature {weather.temperature}°C
      </Typography>
      <Typography variant="h5" component="h3">
        🧖🏻 Feels like {weather.feelslike_c}°C
      </Typography>
      <Typography variant="h5" component="h3">
        💨 Wind {weather.wind_kph}kph
      </Typography>
    </Box>
  );
};

export default WeatherDisplay;
