
# Doctor Árbol API

API REST desarrollada para el proyecto Doctor Árbol de la asignatura Desenvolupament d'Aplicacions Mòbils (CITM - UPC).

La API permite consultar documentos, trabajadores y proyectos relacionados entre sí. Se ha desarrollado porque no se ha encontrado una API pública que se adapte a las necesidades del proyecto.

## Tecnologías

- JavaScript
- Node.js
- JSON
- Vercel Functions

## Estructura del proyecto

- `api/`: funciones que gestionan las peticiones HTTP.
- `data/`: archivos JSON con los datos de ejemplo.
- `package.json`: configuración del proyecto.
- `.gitignore`: archivos excluidos del control de versiones.

## Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/documentos` | Obtener todos los documentos. |
| GET | `/api/documentos?id=3` | Obtener un documento por ID. |
| GET | `/api/documentos?trabajadorId=1` | Obtener los documentos de un trabajador. |
| GET | `/api/trabajadores` | Obtener todos los trabajadores. |
| GET | `/api/trabajadores?id=1` | Obtener un trabajador por ID. |
| GET | `/api/proyectos` | Obtener todos los proyectos. |
| GET | `/api/proyectos?trabajadorId=1` | Obtener los proyectos de un trabajador. |

## Modelo de datos

### Documento

- id: número.
- nombre: texto.
- tipo: texto.
- trabajadorId: número.
- caduca: fecha en formato AAAA-MM-DD.

### Trabajador

- id: número.
- nombre: texto.
- puesto: texto.

### Proyecto

- id: número.
- nombre: texto.
- cliente: texto.
- trabajadores: array de IDs de trabajadores.

## Respuestas HTTP

- 200 OK: petición realizada correctamente.
- 404 Not Found: documento o trabajador inexistente.

## Características

- API de solo lectura.
- Respuestas en formato JSON.
- Acceso sin API key.
- CORS habilitado para las peticiones GET desde el navegador.
- Datos ficticios basados en la referencia de la asignatura.

## Aplicación React

La API será consumida desde el archivo `src/data/api.js` del proyecto principal.

Repositorio:
https://github.com/DAM-CITM-26/DoctorArbol

## Referencia

https://github.com/DAM-CITM-26/referencias/tree/main/doctor-arbol

## Despliegue

La API se publicará en Vercel. Se añadirá la URL pública una vez comprobado el despliegue.
