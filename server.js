import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jugadorRoutes from './routes/jugadores.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/jugadores', jugadorRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb+srv://concajheremy:dJnOL8NVclYjRfbP@ja.odgcezl.mongodb.net/?retryWrites=true&w=majority&appName=JA')
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:3000`));
  })
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// mongoose.connect('mongodb+srv://concajheremy:dJnOL8NVclYjRfbP@ja.odgcezl.mongodb.net/?retryWrites=true&w=majority&appName=JA')
