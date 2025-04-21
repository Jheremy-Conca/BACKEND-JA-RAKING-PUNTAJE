import express from 'express';
import Jugador from '../models/jugador.js';

const router = express.Router();

// Crear jugador
router.post('/', async (req, res) => {
  try {
    const nuevoJugador = new Jugador({ nombre: req.body.nombre });
    await nuevoJugador.save();
    res.status(201).json(nuevoJugador);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los jugadores
router.get('/', async (req, res) => {
  const jugadores = await Jugador.find();
  res.json(jugadores);
});

// Obtener un jugador por ID
router.get('/:id', async (req, res) => {
  const jugador = await Jugador.findById(req.params.id);
  jugador ? res.json(jugador) : res.status(404).json({ error: 'Jugador no encontrado' });
});

// Actualizar jugador
router.put('/:id', async (req, res) => {
  const jugador = await Jugador.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(jugador);
});

// Eliminar jugador
router.delete('/:id', async (req, res) => {
  await Jugador.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Jugador eliminado' });
});

// Sumar puntos
router.post('/:id/sumar', async (req, res) => {
  const jugador = await Jugador.findById(req.params.id);
  if (!jugador) return res.status(404).json({ error: 'Jugador no encontrado' });

  jugador.puntos += req.body.puntos;
  await jugador.save();
  res.json(jugador);
});

// Restar puntos
router.post('/:id/restar', async (req, res) => {
  const jugador = await Jugador.findById(req.params.id);
  if (!jugador) return res.status(404).json({ error: 'Jugador no encontrado' });

  jugador.puntos -= req.body.puntos;
  await jugador.save();
  res.json(jugador);
});

export default router;
