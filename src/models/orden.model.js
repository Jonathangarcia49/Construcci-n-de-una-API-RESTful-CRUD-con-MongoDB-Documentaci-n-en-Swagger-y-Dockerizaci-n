const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Orden', ordenSchema);
