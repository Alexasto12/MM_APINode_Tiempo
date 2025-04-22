const axios = require('axios');

const API_KEY = process.env.OPENWEATHERMAP_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function getClimaActual(lat, lon) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
  const response = await axios.get(url);
  return response.data;
}

async function getPronostico(lat, lon, dias) {
  // OpenWeatherMap free solo permite 5 días (cada 3 horas), para 16 días se requiere plan pago
  // Usamos /forecast para 5 días, /forecast/daily para 16 días (si tienes acceso)
  if (dias <= 5) {
    const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await axios.get(url);
    return response.data;
  } else {
    const url = `${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&cnt=${dias}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await axios.get(url);
    return response.data;
  }
}

module.exports = { getClimaActual, getPronostico };
