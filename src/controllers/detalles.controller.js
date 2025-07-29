import DetalleOrden from '../models/DetalleOrden.js';

export const obtenerDetalles = async (_, res) => {
  const detalles = await DetalleOrden.find().populate('ordenId').populate('productoId');
  res.json(detalles);
};

export const crearDetalle = async (req, res) => {
  const nuevo = new DetalleOrden(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

export const detallesPorOrden = async (req, res) => {
  const detalles = await DetalleOrden.find({ ordenId: req.params.ordenId }).populate('productoId');
  res.json(detalles);
};
