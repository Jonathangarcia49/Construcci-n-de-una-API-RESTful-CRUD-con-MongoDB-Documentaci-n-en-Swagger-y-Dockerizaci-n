const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente.model');

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gestión de clientes
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado
 */
router.post('/', async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.status(201).json(cliente);
});

module.exports = router;
