import React from "react";
import { Typography, Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="sm" sx={{ font-weigth: "bold" }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weatherly
      </Typography>
    </Container>
  );
};

export default Header;