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
      }}
    >
      <Typography variant="h4" component="h2">
        {weather.city}, {weather.country}
      </Typography>
      <Box
        component="img"
        alt={weather.conditionText}
        src={weather.icon}
        sx={{ margin: "0 auto", width: "120px", height: "120px" }}
      />
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