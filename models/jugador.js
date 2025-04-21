import mongoose from 'mongoose';

const jugadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  puntos: { type: Number, default: 0 }
});

const Jugador = mongoose.model('Jugador', jugadorSchema);

export default Jugador;
