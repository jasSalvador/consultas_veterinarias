# Consultas Veterinarias

Este es un proyecto frontend desarrollado con Vue.js que permite gestionar consultas médicas veterinarias. **El proyecto requiere un backend específico** para manejar las operaciones de creación, consulta, actualización y eliminación de datos.

## Características

- Listado de todas las consultas veterinarias.
- Creación de nuevas consultas.
- Edición de consultas existentes.
- Eliminación de consultas.
- Uso de componentes reutilizables y un diseño intuitivo para la interacción del usuario.

## Requisitos

- **Backend:** Este proyecto está diseñado para conectarse a un backend desarrollado en [framework o lenguaje del backend, por ejemplo, Node.js con Express]. El backend debe implementar los siguientes endpoints:

  - `GET /consultas` - Obtiene todas las consultas.
  - `POST /consultas` - Crea una nueva consulta.
  - `PUT /consultas/:id` - Actualiza una consulta existente.
  - `DELETE /consultas/:id` - Elimina una consulta.

  > **Nota:** Este frontend no utiliza una API pública. Se debe configurar un backend local compatible para que funcione correctamente.

## Configuración

1. Asegúrate de tener el backend en funcionamiento en tu entorno local. Si no tienes acceso al backend original, puedes crear uno similar siguiendo los requisitos mencionados en la sección anterior.
2. Clona este repositorio y sigue los pasos para configurar el frontend.

### Configuración del Frontend

```bash
npm install

npm run serve
```

