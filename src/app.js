import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/swagger.js';
import clienteRoutes from './routes/clientes.routes.js';
import productoRoutes from './routes/productos.routes.js';
import ordenRoutes from './routes/ordenes.routes.js';
import detalleRoutes from './routes/detalles.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

dotenv.config();
const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clientes.routes');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
connectToDatabase();

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/detalles', detalleRoutes);


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicio del servidor
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;