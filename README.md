# API de Clima de Ciudades

Esta API en Node.js permite consultar el clima actual y el pronóstico de varias ciudades del mundo usando la API de OpenWeatherMap. Además, puedes gestionar (CRUD) la lista de ciudades en memoria.

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo `.env.example` a `.env` y coloca tu API key de OpenWeatherMap:
   ```bash
   cp .env.example .env
   # Edita .env y reemplaza tu_api_key_aqui por tu clave real
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

## Endpoints

### CRUD de Ciudades

- **GET /ciudades**
  - Lista todas las ciudades almacenadas.

- **POST /ciudades**
  - Agrega una ciudad.
  - Body JSON: `{ "nombre": "Ciudad", "lat": 0.0, "lon": 0.0 }`

- **PUT /ciudades/:nombre**
  - Actualiza latitud/longitud de una ciudad.
  - Body JSON: `{ "lat": 0.0, "lon": 0.0 }`

- **DELETE /ciudades/:nombre**
  - Elimina una ciudad por nombre.

### Clima

- **GET /clima/:nombre**
  - Devuelve el clima completo de la ciudad indicada.

- **GET /clima/:nombre/parametro/:parametro**
  - Devuelve solo un parámetro del clima (ej: temperatura, humedad, etc).
  - Ejemplo: `/clima/Madrid/parametro/temp`

- **GET /clima/:nombre/pronostico/:dias**
  - Devuelve el pronóstico de la ciudad para 4 o 16 días.
  - Ejemplo: `/clima/Madrid/pronostico/4`

## Notas
- Todas las respuestas están en formato JSON.
- Las ciudades se almacenan en memoria (no se usa base de datos).
- Para el pronóstico de 16 días, se requiere un plan pago de OpenWeatherMap.

## Ejemplo de ciudad
```json
{
  "nombre": "Madrid",
  "lat": 40.4168,
  "lon": -3.7038
}
```

## Autor
- Proyecto de ejemplo para curso Node.js
- Desarrollado por Alexasto
