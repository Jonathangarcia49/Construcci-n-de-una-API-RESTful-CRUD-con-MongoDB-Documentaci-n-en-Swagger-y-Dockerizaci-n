// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de la API',
      version: '1.0.0',
      description: 'API RESTful para la gestión de clientes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [
    './src/routes/*.js' 
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
