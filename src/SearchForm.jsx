import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

const SearchForm = ({ onSubmit, city, setCity, loading, error }) => {
  return (
    <Box
      sx={{ display: "grid", gap: 2 }}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="city"
        label="Ciudad"
        variant="outlined"
        size="small"
        required
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={error.error}
        helperText={error.message}
      />
      <LoadingButton
        sx={{ backgroundColor: "#B63CFE", "&:hover": { backgroundColor: "#6414ff" }}}
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Buscando..."
      >
        Buscar
      </LoadingButton>
    </Box>
  );
};

export default SearchForm;
