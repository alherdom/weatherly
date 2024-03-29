import React from "react";
import { Typography, Container } from "@mui/material";
// Function component that returns the header
const Header = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weatherly
      </Typography>
    </Container>
  );
};

export default Header;
