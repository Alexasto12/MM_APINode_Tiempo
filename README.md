# 🌤️ API de Clima de Ciudades

Esta API en **Node.js** permite consultar el clima actual y el pronóstico de varias ciudades del mundo usando **OpenWeatherMap**. También puedes gestionar (CRUD) la lista de ciudades en memoria.

---

## 🚀 Instalación

1. Clona el repositorio o descarga los archivos.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Copia el archivo de entorno y agrega tu API Key de OpenWeatherMap:

   ```bash
   cp .env.example .env
   # Edita .env y reemplaza "tu_api_key_aqui" con tu clave real
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

---

## 📡 Endpoints

### 🏙️ CRUD de Ciudades

| Método | Endpoint               | Descripción                                  |
|--------|------------------------|----------------------------------------------|
| GET    | `/ciudades`            | Lista todas las ciudades almacenadas.        |
| POST   | `/ciudades`            | Agrega una ciudad.                           |
| PUT    | `/ciudades/:nombre`    | Actualiza latitud/longitud de una ciudad.    |
| DELETE | `/ciudades/:nombre`    | Elimina una ciudad por nombre.               |

**Ejemplo Body JSON para POST**:

```json
{
  "nombre": "Ciudad",
  "lat": 0.0,
  "lon": 0.0
}
```

**Ejemplo Body JSON para PUT**:

```json
{
  "lat": 0.0,
  "lon": 0.0
}
```

---

### 🌦️ Clima

| Método | Endpoint                                      | Descripción                                                    |
|--------|-----------------------------------------------|----------------------------------------------------------------|
| GET    | `/clima/:nombre`                              | Devuelve el clima completo de la ciudad indicada.              |
| GET    | `/clima/:nombre/parametro/:parametro`         | Devuelve un parámetro del clima (ej: `temp`, `humidity`).     |
| GET    | `/clima/:nombre/pronostico/:dias`             | Devuelve el pronóstico de la ciudad (4 o 16 días).             |

**Ejemplos:**
- `/clima/Madrid/parametro/temp`
- `/clima/Madrid/pronostico/4`

---

## 📝 Notas

- Todas las respuestas están en formato **JSON**.
- Las ciudades se almacenan en **memoria** (no hay base de datos).
- El pronóstico de **16 días** requiere un plan **de pago** de OpenWeatherMap.

---

## 🧪 Ejemplo de Ciudad

```json
{
  "nombre": "Madrid",
  "lat": 40.4168,
  "lon": -3.7038
}
```

---

## 🧰 Ejemplos de uso

### 📬 Con Postman

#### ✅ Listar ciudades
- **Método:** GET  
- **URL:** `http://localhost:3000/ciudades`

#### ➕ Agregar una ciudad
- **Método:** POST  
- **URL:** `http://localhost:3000/ciudades`  
- **Body (JSON):**
  ```json
  {
    "nombre": "Paris",
    "lat": 48.8566,
    "lon": 2.3522
  }
  ```

#### 🔄 Actualizar una ciudad
- **Método:** PUT  
- **URL:** `http://localhost:3000/ciudades/Paris`  
- **Body (JSON):**
  ```json
  {
    "lat": 48.85,
    "lon": 2.35
  }
  ```

#### ❌ Eliminar una ciudad
- **Método:** DELETE  
- **URL:** `http://localhost:3000/ciudades/Paris`

#### 🌍 Clima completo
- **Método:** GET  
- **URL:** `http://localhost:3000/clima/Madrid`

#### 🌡️ Clima (parámetro único)
- **Método:** GET  
- **URL:** `http://localhost:3000/clima/Madrid/parametro/temp`

#### 📅 Pronóstico a 4 días
- **Método:** GET  
- **URL:** `http://localhost:3000/clima/Madrid/pronostico/4`

#### 📅 Pronóstico a 16 días
- **Método:** GET  
- **URL:** `http://localhost:3000/clima/Madrid/pronostico/16`

---

### 🧪 Con cURL

#### ✅ Listar ciudades
```bash
curl http://localhost:3000/ciudades
```

#### ➕ Agregar una ciudad
```bash
curl -X POST http://localhost:3000/ciudades \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Paris","lat":48.8566,"lon":2.3522}'
```

#### 🔄 Actualizar una ciudad
```bash
curl -X PUT http://localhost:3000/ciudades/Paris \
  -H "Content-Type: application/json" \
  -d '{"lat":48.85,"lon":2.35}'
```

#### ❌ Eliminar una ciudad
```bash
curl -X DELETE http://localhost:3000/ciudades/Paris
```

#### 🌍 Clima completo
```bash
curl http://localhost:3000/clima/Madrid
```

#### 🌡️ Clima (parámetro único)
```bash
curl http://localhost:3000/clima/Madrid/parametro/temp
```

#### 📅 Pronóstico a 4 días
```bash
curl http://localhost:3000/clima/Madrid/pronostico/4
```

#### 📅 Pronóstico a 16 días
```bash
curl http://localhost:3000/clima/Madrid/pronostico/16
```

---

## 👤 Autor

- Proyecto de ejemplo para curso de **Node.js**
- Desarrollado por **Alexasto12**
