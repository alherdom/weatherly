import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography textAlign="center" sx={{ mt: 2, fontSize: '0.8rem' }}>
        Made by{" "}
        <a href="https://github.com/alherdom" title="GitHub" target="_blank">
          @alherdom
        </a>
          {" "}powered by{" "}
        <a href="https://www.weatherapi.com/" title="Weather API" target="_blank">
          weatherAPI
        </a>
      </Typography>
    </Container>
  );
};

export default Footer;