const axios = require('axios');

const API_KEY = process.env.OPENWEATHERMAP_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Función para obtener el clima actual de una ubicación específica
// Recibe como parámetros la latitud (lat) y longitud (lon) de la ubicación
async function getClimaActual(lat, lon) {
  // Construimos la URL para la API de OpenWeatherMap con los parámetros necesarios
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
  
  // Realizamos la solicitud HTTP GET a la API usando axios
  const response = await axios.get(url);
  
  // Retornamos los datos obtenidos de la respuesta de la API
  return response.data;
}

async function getPronostico(lat, lon, dias) {
  // OpenWeatherMap free solo permite 5 días (cada 3 horas), para 16 días se requiere plan pago
  // Usamos /forecast para 5 días, /forecast/daily para 16 días (si tienemos acceso)
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
