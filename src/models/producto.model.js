const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: false
  },
  stock: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Producto', productoSchema);
