const mongoose = require('mongoose');
const Cliente = require('../models/cliente.model');
const Producto = require('../models/producto.model');
const Orden = require('../models/orden.model');
const DetalleOrden = require('../models/detalleOrden.model');

async function seed() {
  try {
    await mongoose.connect('mongodb://mongo:27017/ventas');

    console.log('Conectado a MongoDB para seeding');

    await Cliente.deleteMany();
    await Producto.deleteMany();
    await Orden.deleteMany();
    await DetalleOrden.deleteMany();

    const clientes = await Cliente.insertMany([
      { nombre: "Jonathan Garcia", correo: "jonathanag@gmail.com", direccion: "Propicia 2" },
      { nombre: "Maria Garcia", correo: "majo2000@gmail.com", direccion: "Codesa" },
      { nombre: "Farit Reasco", correo: "faritdf@hotmail.com", direccion: "Vuelta Larga" },
      { nombre: "Saul Campo", correo: "saulcam@gmail.com", direccion: "Casa bonita" }, 
    ]);

    const productos = await Producto.insertMany([
      { nombre: "Play 5", descripcion: "Consola", precio: 700, stock: 20 },
      { nombre: "Laptop", descripcion: "Computadora", precio: 300, stock: 30 },
      { nombre: "Samsung S22 ultra", descripcion: "Telefono", precio: 400, stock: 20 },
      { nombre: "JVL", descripcion: "Parlante", precio: 300, stock: 10 },
    ]);

    const ordenes = await Orden.insertMany([
      { cliente: clientes[0]._id, fecha: new Date(), total: 700 },
      { cliente: clientes[1]._id, fecha: new Date(), total: 200 },
      { cliente: clientes[2]._id, fecha: new Date(), total: 500 },
      { cliente: clientes[3]._id, fecha: new Date(), total: 80 },
      { cliente: clientes[4]._id, fecha: new Date(), total: 200 }
    ]);

    await DetalleOrden.insertMany([
      {
        orden: ordenes[0]._id,
        producto: productos[0]._id,
        cantidad: 1,
        precioUnitario: productos[0].precio
      },
      {
        orden: ordenes[0]._id,
        producto: productos[1]._id,
        cantidad: 1,
        precioUnitario: productos[1].precio
      },
      {
        orden: ordenes[1]._id,
        producto: productos[2]._id,
        cantidad: 2,
        precioUnitario: productos[2].precio
      },
      {
        orden: ordenes[2]._id,
        producto: productos[0]._id,
        cantidad: 1,
        precioUnitario: productos[0].precio
      },
      {
        orden: ordenes[3]._id,
        producto: productos[4]._id,
        cantidad: 1,
        precioUnitario: productos[4].precio
      }
    ]);

    console.log('Base de datos poblada exitosamente');
    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
}

seed();
