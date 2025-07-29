📦 API RESTful CRUD con MongoDB, Swagger y Docker
📝 Descripción del Proyecto
Este proyecto consiste en la construcción de una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de datos utilizando MongoDB como base de datos. La API está documentada con Swagger (OpenAPI) para facilitar su uso e integración, y está dockerizada para facilitar su despliegue en cualquier entorno.

Este trabajo corresponde al Proyecto Final del curso de Base de Datos, desarrollado por Jonathan Joseph García García.

⚙️ Tecnologías Utilizadas
Node.js y Express: Backend con JavaScript.
MongoDB: Base de datos.
Mongoose: Modelado de datos para MongoDB.
Swagger UI: Documentación interactiva de la API.
Docker y Docker Compose: Contenerización del proyecto.
🚀 Instalación y Ejecución
✅ Requisitos previos
Tener instalado Docker y Docker Compose.
🔧 Variables de entorno
Crea un archivo .env en la raíz con el siguiente contenido:

🐳 Dockerización Este proyecto contiene los archivos necesarios para ejecutarse completamente en contenedores usando Docker. Dockerfile: Define la imagen para la aplicación Node.js. docker-compose.yml: Crea y levanta contenedores para la API y MongoDB. Ejecuta todo con:

docker-compose up

👨‍💻 Autor Jonathan Joseph García García Proyecto Final – Base de Datos Tema: Construcción de una API RESTful CRUD con MongoDB, Documentación en Swagger y Dockerización
