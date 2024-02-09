import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography textAlign="center" sx={{ mt: 2, mb: 4 }}>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};

export default Footer;
