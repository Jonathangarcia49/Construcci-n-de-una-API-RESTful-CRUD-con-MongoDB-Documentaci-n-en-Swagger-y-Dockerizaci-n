const express = require('express');
const router = express.Router();
const Orden = require('../models/orden.model');

/**
 * @swagger
 * tags:
 *   name: Ordenes
 *   description: Endpoints para gestión de órdenes
 */

/**
 * @swagger
 * /api/ordenes:
 *   get:
 *     summary: Obtener todas las órdenes
 *     tags: [Ordenes]
 *     responses:
 *       200:
 *         description: Lista de órdenes
 */
router.get('/', async (req, res) => {
  const ordenes = await Orden.find().populate('cliente');
  res.json(ordenes);
});

/**
 * @swagger
 * /api/ordenes:
 *   post:
 *     summary: Crear una nueva orden
 *     tags: [Ordenes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *                 description: ID del cliente
 *               fecha:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Orden creada
 */
router.post('/', async (req, res) => {
  const orden = new Orden(req.body);
  await orden.save();
  res.status(201).json(orden);
});

module.exports = router;
