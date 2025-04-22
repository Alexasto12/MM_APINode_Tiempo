require('dotenv').config();
const express = require('express');
const ciudadesRouter = require('./ciudades');
const climaRouter = require('./clima');

const app = express();
app.use(express.json());

// Rutas para CRUD de ciudades
app.use('/ciudades', ciudadesRouter);
// Rutas para clima
app.use('/clima', climaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
