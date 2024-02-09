import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        Created by{" "}
        <a href="https://github.com/alherdom" title="GitHub">
          @alherdom
        </a>
      </Typography>
    </Container>
  );
};

export default Footer;