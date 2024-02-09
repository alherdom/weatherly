import React from "react";
import { Typography, Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="xs" sx={{}}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Weatherly
      </Typography>
    </Container>
  );
};

export default Header;