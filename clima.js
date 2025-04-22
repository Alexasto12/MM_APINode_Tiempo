const express = require('express');
const router = express.Router();
const { ciudades } = require('./ciudades');
const { getClimaActual, getPronostico } = require('./weatherService');

// Clima completo de una ciudad
router.get('/:nombre', async (req, res) => {
  const nombre = req.params.nombre;
  const ciudad = ciudades.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
  if (!ciudad) {
    return res.status(404).json({ error: 'Ciudad no encontrada' });
  }
  try {
    const clima = await getClimaActual(ciudad.lat, ciudad.lon);
    res.json(clima);
  } catch (err) {
    res.status(500).json({ error: 'Error consultando el clima', detalle: err.message });
  }
});

// Clima de una ciudad mostrando un único parámetro
router.get('/:nombre/parametro/:parametro', async (req, res) => {
  const nombre = req.params.nombre;
  const parametro = req.params.parametro;
  const ciudad = ciudades.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
  if (!ciudad) {
    return res.status(404).json({ error: 'Ciudad no encontrada' });
  }
  try {
    const clima = await getClimaActual(ciudad.lat, ciudad.lon);
    if (clima[parametro] !== undefined) {
      res.json({ [parametro]: clima[parametro] });
    } else if (clima.main && clima.main[parametro] !== undefined) {
      res.json({ [parametro]: clima.main[parametro] });
    } else if (clima.weather && Array.isArray(clima.weather) && clima.weather[0][parametro] !== undefined) {
      res.json({ [parametro]: clima.weather[0][parametro] });
    } else {
      res.status(404).json({ error: 'Parámetro no encontrado en la respuesta de clima' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error consultando el clima', detalle: err.message });
  }
});

// Clima de una ciudad con pronóstico a 4 o 16 días
router.get('/:nombre/pronostico/:dias', async (req, res) => {
  const nombre = req.params.nombre;
  const dias = parseInt(req.params.dias);
  if (![4, 16].includes(dias)) {
    return res.status(400).json({ error: 'Solo se permite pronóstico a 4 o 16 días' });
  }
  const ciudad = ciudades.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
  if (!ciudad) {
    return res.status(404).json({ error: 'Ciudad no encontrada' });
  }
  try {
    const pronostico = await getPronostico(ciudad.lat, ciudad.lon, dias);
    res.json(pronostico);
  } catch (err) {
    res.status(500).json({ error: 'Error consultando el pronóstico', detalle: err.message });
  }
});

module.exports = router;
