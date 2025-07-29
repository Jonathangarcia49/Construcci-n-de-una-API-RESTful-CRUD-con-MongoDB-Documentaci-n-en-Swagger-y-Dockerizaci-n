import Producto from '../models/Producto.js';

export const obtenerProductos = async (_, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

export const crearProducto = async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

export const actualizarProducto = async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(producto);
};

export const eliminarProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Producto eliminado' });
};
