import React, { useState, useEffect } from "react";
import { Container, CircularProgress } from "@mui/material";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import Footer from "./Footer";
// API URL for fetching weather data based on geolocation or manually entered city
// VITE_API_KEY is an environment variable that stores the API key
const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;
// Function component that returns the main app
const App = () => {
  // Declare state variables for city, loading, error, and weather data
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  // Declare state variable for weather data
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });
  // Fetch location and weather data when component mounts
  useEffect(() => {
    // Fetch location and weather data when component mounts
    const fetchLocationAndWeather = async () => {
      try {
        // Get user's current geolocation
        const getLocation = () => {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };
        // Destructure latitude and longitude from geolocation
        const position = await getLocation();
        const { latitude, longitude } = position.coords;
        // Fetch weather data based on obtained geolocation
        const weatherResponse = await fetch(
          `${API_WEATHER}${latitude},${longitude}`
        );
        const weatherData = await weatherResponse.json();
        // Check for errors in weather data
        if (weatherData.error) throw new Error(weatherData.error.message);
        // Update weather state with fetched data
        setWeather({
          city: weatherData.location.name,
          country: weatherData.location.country,
          temperature: Math.round(weatherData.current.temp_c),
          condition: weatherData.current.condition.code,
          conditionText: weatherData.current.condition.text,
          icon: weatherData.current.condition.icon,
          cloud: weatherData.current.cloud,
          feelslike_c: Math.round(weatherData.current.feelslike_c),
          wind_kph: Math.round(weatherData.current.wind_kph),
          humidity: weatherData.current.humidity,
        });
      } catch (error) {
        // Handle errors in geolocation or weather data fetching
        setError({
          error: true,
          message:
            "Unable to get current location. Please enter your location manually.",
        });
        // Finally, set loading to false to stop loading indicator
      } finally {
        setLoading(false);
      }
    };
    // Call fetchLocationAndWeather function when component mounts
    fetchLocationAndWeather();
    // Empty dependency array to run the effect only once
  }, []);
  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: "",
    });
    try {
      // Check if city is empty
      if (!city.trim()) throw { message: "Please enter a city" };
      // Fetch weather data based on manually entered city
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      if (data.error) throw { message: data.error.message };
      // Update weather state with manually entered city
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
      // Handle errors in manually entered city or weather data fetching
      setError({
        error: true,
        message: error.message || "There was a problem fetching weather data.",
      });
      // Finally, set loading to false to stop loading indicator
    } finally {
      setLoading(false);
    }
  };
  // Return the main app
  return (
    <Container maxWidth="sm" sx={{ mt: 1 }}>
      <Header />
      <SearchForm
        onSubmit={onSubmit}
        city={city}
        setCity={setCity}
        loading={loading}
        error={error}
      />
      {loading ? (
        // Display loading indicator while fetching location and weather data
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
          <p>Fetching location and current weather conditions...</p>
        </div>
      ) : error.error ? (
        // Display error message if geolocation fails or weather data fetching fails
        <p style={{ textAlign: "center", color: "red" }}>{error.message}</p>
      ) : (
        // Display weather data if available
        weather.city && <WeatherDisplay weather={weather} />
      )}
      <footer className="footer">
        <Footer />
      </footer>
    </Container>
  );
};

export default App;
