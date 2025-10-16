// src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

const controller = new TaskController();

/**
 * GET /api/tasks  → afficher toutes les tâches
 */
router.get('/', (req, res) => {
  res.status(200).json(controller.listTasks());
});

/**
 * POST /api/tasks  → ajouter une tâche
 * Body JSON: { "title": "Ma nouvelle tâche" }
 */
router.post('/', (req, res) => {
  const title = (req.body?.title || '').trim();
  if (!title) {
    return res.status(400).json({ error: "Field 'title' is required" });
  }
  const task = controller.addTask(title);
  res.status(201).json(task);
});

/**
 * DELETE /api/tasks/:id  → supprimer une tâche
 */
router.delete('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid id (must be a number)' });
  }
  const ok = controller.deleteTask(id);
  if (!ok) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
});

module.exports = router;
