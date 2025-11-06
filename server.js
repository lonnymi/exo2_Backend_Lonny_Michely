import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectMongo } from './config/db.js';
import { connectMySQL } from './config/mysql.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', express.static(path.join(__dirname, 'views')));

app.use('/api/tasks', taskRoutes);

app.use((req, res, _next) => res.status(404).json({ error: 'Route introuvable', path: req.path }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur' });
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectMongo(process.env.MONGO_URI);
    await connectMySQL();
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
  } catch (e) {
    console.error('Startup failed:', e);
    process.exit(1);
  }
}

start();
