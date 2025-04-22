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

## Ejemplos de uso con Postman

### Listar ciudades
- Método: GET
- URL: http://localhost:3000/ciudades

### Agregar una ciudad
- Método: POST
- URL: http://localhost:3000/ciudades
- Body (JSON):
```json
{
  "nombre": "Paris",
  "lat": 48.8566,
  "lon": 2.3522
}
```

### Actualizar una ciudad
- Método: PUT
- URL: http://localhost:3000/ciudades/Paris
- Body (JSON):
```json
{
  "lat": 48.85,
  "lon": 2.35
}
```

### Eliminar una ciudad
- Método: DELETE
- URL: http://localhost:3000/ciudades/Paris

### Clima completo de una ciudad
- Método: GET
- URL: http://localhost:3000/clima/Madrid

### Clima de una ciudad mostrando un único parámetro
- Método: GET
- URL: http://localhost:3000/clima/Madrid/parametro/temp

### Pronóstico de una ciudad a 4 días
- Método: GET
- URL: http://localhost:3000/clima/Madrid/pronostico/4

### Pronóstico de una ciudad a 16 días
- Método: GET
- URL: http://localhost:3000/clima/Madrid/pronostico/16

---

## Ejemplos de uso con Curl

### Listar ciudades
```bash
curl http://localhost:3000/ciudades
```

### Agregar una ciudad
```bash
curl -X POST http://localhost:3000/ciudades \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Paris","lat":48.8566,"lon":2.3522}'
```

### Actualizar una ciudad
```bash
curl -X PUT http://localhost:3000/ciudades/Paris \
  -H "Content-Type: application/json" \
  -d '{"lat":48.85,"lon":2.35}'
```

### Eliminar una ciudad
```bash
curl -X DELETE http://localhost:3000/ciudades/Paris
```

### Clima completo de una ciudad
```bash
curl http://localhost:3000/clima/Madrid
```

### Clima de una ciudad mostrando un único parámetro
```bash
curl http://localhost:3000/clima/Madrid/parametro/temp
```

### Pronóstico de una ciudad a 4 días
```bash
curl http://localhost:3000/clima/Madrid/pronostico/4
```

### Pronóstico de una ciudad a 16 días
```bash
curl http://localhost:3000/clima/Madrid/pronostico/16
```

## Autor
- Proyecto de ejemplo para curso Node.js
- Desarrollado por Alexasto
