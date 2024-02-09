import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        Created by{" "}
        <a href="https://github.com/alherdom" title="GitHub" target="_blank">
          @alherdom
        </a>
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Weather API" target="_blank">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};

export default Footer;