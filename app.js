// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
