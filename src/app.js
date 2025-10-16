// src/app.js
const express = require('express');
const tasksRouter = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

// healthcheck
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'ToDoList API (Express) running' });
});

// routes API (comme le repo : /api/tasks)
app.use('/api/tasks', tasksRouter);

module.exports = app;
