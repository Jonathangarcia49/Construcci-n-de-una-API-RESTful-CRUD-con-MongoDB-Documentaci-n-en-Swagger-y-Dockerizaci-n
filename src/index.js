const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// Rutas
const clienteRoutes = require('./routes/clientes.routes');
const productoRoutes = require('./routes/productos.routes');
const ordenRoutes = require('./routes/ordenes.routes');
const detalleRoutes = require('./routes/detalles.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <-- Permite peticiones externas
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/tienda')
  .then(() => console.log('✅ MongoDB conectado'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));


app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/detalles', detalleRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger en http://localhost:${PORT}/api-docs`);
});
