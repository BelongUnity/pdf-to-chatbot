const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pdfRoutes = require('./routes/pdfRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pdf', pdfRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'PDF to Chatbot API' });
});

module.exports = app;
