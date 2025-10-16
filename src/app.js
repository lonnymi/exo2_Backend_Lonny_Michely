const express = require('express');
const cors = require('cors');                  
const tasksRouter = require('./routes/taskRoutes');

const app = express();

const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: corsOrigin }));         

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'ToDoList API (Express) running' });
});

app.use('/api/tasks', tasksRouter);

module.exports = app;
