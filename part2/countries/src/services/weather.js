import axios from 'axios'

// The API key is stored in a `.env.local` file
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = async location => {
  const queryParams = new URLSearchParams()

  queryParams.append('q', location)
  queryParams.append('units', 'metric') // For temperature in Celsius
  queryParams.append('appid', apiKey)

  return axios
    .get(`${baseUrl}?${queryParams.toString()}`)
    .then(response => response.data)
}

export default {
  getWeather,
}
