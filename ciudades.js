// Array en memoria para almacenar ciudades
// Cada ciudad: { nombre, lat, lon }
const ciudades = [
  { nombre: 'Madrid', lat: 40.4168, lon: -3.7038 },
  { nombre: 'Buenos Aires', lat: -34.6037, lon: -58.3816 },
  { nombre: 'New York', lat: 40.7128, lon: -74.006 },
  { nombre: 'Tokyo', lat: 35.6895, lon: 139.6917 }
];

const express = require('express');
const router = express.Router();

// Listar todas las ciudades
router.get('/', (req, res) => {
  res.json(ciudades);
});

// Agregar una ciudad
router.post('/', (req, res) => {
  const { nombre, lat, lon } = req.body;
  if (!nombre || lat === undefined || lon === undefined) {
    return res.status(400).json({ error: 'Faltan datos de la ciudad' });
  }
  if (ciudades.find(c => c.nombre.toLowerCase() === nombre.toLowerCase())) {
    return res.status(409).json({ error: 'La ciudad ya existe' });
  }
  ciudades.push({ nombre, lat, lon });
  res.status(201).json({ mensaje: 'Ciudad agregada', ciudad: { nombre, lat, lon } });
});

// Actualizar una ciudad
router.put('/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const { lat, lon } = req.body;
  const ciudad = ciudades.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
  if (!ciudad) {
    return res.status(404).json({ error: 'Ciudad no encontrada' });
  }
  if (lat !== undefined) ciudad.lat = lat;
  if (lon !== undefined) ciudad.lon = lon;
  res.json({ mensaje: 'Ciudad actualizada', ciudad });
});

// Eliminar una ciudad
router.delete('/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const index = ciudades.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase());
  if (index === -1) {
    return res.status(404).json({ error: 'Ciudad no encontrada' });
  }
  const eliminada = ciudades.splice(index, 1);
  res.json({ mensaje: 'Ciudad eliminada', ciudad: eliminada[0] });
});

// Exportar el array para usarlo en otros módulos
module.exports = router;
module.exports.ciudades = ciudades;
