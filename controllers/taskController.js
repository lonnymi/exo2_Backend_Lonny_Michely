import Task from '../models/Task.js';
import { insertTaskMySQL, deleteTaskMySQLByMongoId } from '../models/TaskMySQL.js';

export default class TaskController {
  static async list(_req, res, next) {
    try {
      // Retour canonique depuis Mongo (comme le repo modèle)
      const tasks = await Task.find().sort({ createdAt: -1 });
      res.json(tasks);
    } catch (err) { next(err); }
  }

  static async add(req, res, next) {
    try {
      const { title } = req.body;
      if (!title) return res.status(400).json({ error: 'title est requis' });

      // 1) Créer dans Mongo
      const created = await Task.create({ title });

      // 2) Miroir dans MySQL
      await insertTaskMySQL({ mongo_id: String(created._id), title });

      res.status(201).json(created);
    } catch (err) { next(err); }
  }

  static async remove(req, res, next) {
    try {
      const { id } = req.params; // id Mongo
      const deleted = await Task.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: 'Tâche introuvable' });

      // Supprimer côté MySQL aussi
      await deleteTaskMySQLByMongoId(String(id));

      res.status(204).send();
    } catch (err) { next(err); }
  }
}
