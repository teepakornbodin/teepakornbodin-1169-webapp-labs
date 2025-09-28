import axios from "axios";

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { key: API_KEY, q: city, aqi: "no" },
    });
    const data = response.data;
    console.log(
      `Current temperature in ${data.location.name} is ${data.current.temp_c}°C`
    );
    console.log(`Weather condition: ${data.current.condition.text}`);
  } catch (error) {
    if (error.response?.data?.error) {
      console.error(`Error: ${error.response.data.error.message}`);
    } else {
      console.error("Error: Unable to fetch weather data. Please check your connection.");
    }
    process.exit(1);
  }
};

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(
    `Error: Please provide city name\nUsage: node weather.js <city_name>\nExample: node weather.js "Khon Kaen"\nNote: Use quotes for city names with spaces`
  );
  process.exit(1);
}


const city = args.join(" ");
getWeather(city);
