const mongoose = require('mongoose');

const detalleOrdenSchema = new mongoose.Schema({
  orden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orden',
    required: true
  },
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precioUnitario: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('DetalleOrden', detalleOrdenSchema);
