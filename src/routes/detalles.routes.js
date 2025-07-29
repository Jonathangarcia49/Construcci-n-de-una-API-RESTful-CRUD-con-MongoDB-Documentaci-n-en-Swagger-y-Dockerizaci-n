const express = require('express');
const router = express.Router();
const DetalleOrden = require('../models/detalleOrden.model');

/**
 * @swagger
 * tags:
 *   name: Detalles
 *   description: Endpoints para gestión de detalles de órdenes
 */

/**
 * @swagger
 * /api/detalles:
 *   get:
 *     summary: Obtener todos los detalles de órdenes
 *     tags: [Detalles]
 *     responses:
 *       200:
 *         description: Lista de detalles
 */
router.get('/', async (req, res) => {
  const detalles = await DetalleOrden.find().populate('orden').populate('producto');
  res.json(detalles);
});

/**
 * @swagger
 * /api/detalles:
 *   post:
 *     summary: Crear un nuevo detalle de orden
 *     tags: [Detalles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orden:
 *                 type: string
 *                 description: ID de la orden
 *               producto:
 *                 type: string
 *                 description: ID del producto
 *               cantidad:
 *                 type: integer
 *               precioUnitario:
 *                 type: number
 *     responses:
 *       201:
 *         description: Detalle de orden creado
 */
router.post('/', async (req, res) => {
  const detalle = new DetalleOrden(req.body);
  await detalle.save();
  res.status(201).json(detalle);
});

module.exports = router;
