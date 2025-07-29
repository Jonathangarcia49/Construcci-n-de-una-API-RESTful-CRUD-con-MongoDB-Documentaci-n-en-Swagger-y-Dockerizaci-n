import Orden from '../models/Orden.js';

export const obtenerOrdenes = async (_, res) => {
  const ordenes = await Orden.find().populate('clienteId');
  res.json(ordenes);
};

export const crearOrden = async (req, res) => {
  const nueva = new Orden(req.body);
  await nueva.save();
  res.status(201).json(nueva);
};

export const ordenesPorCliente = async (req, res) => {
  const ordenes = await Orden.find({ clienteId: req.params.clienteId });
  res.json(ordenes);
};
