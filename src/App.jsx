import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import Footer from "./Footer";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: "",
    });
    try {
      if (!city.trim()) throw { message: "Ingrese una ciudad" };
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      if (data.error) throw { message: data.error.message };
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: Math.round(data.current.temp_c),
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
        cloud: data.current.cloud,
        feelslike_c: Math.round(data.current.feelslike_c),
        wind_kph: Math.round(data.current.wind_kph),
        humidity: data.current.humidity,
      });
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Header />
      <SearchForm
        onSubmit={onSubmit}
        city={city}
        setCity={setCity}
        loading={loading}
        error={error}
      />
      {weather.city && <WeatherDisplay weather={weather} />}
      <footer className="footer">
        <Footer />
      </footer>
    </Container>
  );
};

export default App;
