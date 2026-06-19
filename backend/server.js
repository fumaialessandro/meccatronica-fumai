const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (Permettono al server di leggere i dati e comunicare con il sito)
app.use(cors());
app.use(express.json());

// Connessione al Database (MongoDB)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connessione a MongoDB completata!'))
  .catch((error) => console.error('❌ Errore MongoDB:', error));

// Rotta di test
app.get('/', (req, res) => {
  res.send('Server Meccatronica Fumai Online!');
});

// Accensione del server
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});