// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Importa el framework Express
const express = require('express');

// Importa el enrutador para las rutas de ciudades
const ciudadesRouter = require('./ciudades');

// Importa el enrutador para las rutas de clima
const climaRouter = require('./clima');

const app = express();
app.use(express.json());

// Rutas para CRUD de ciudades
app.use('/ciudades', ciudadesRouter);
// Rutas para clima
app.use('/clima', climaRouter);

// Pongo el 3000 como puerto por defecto por si no se define en el .env
// Si se define en el .env, lo pilla de ahí
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
