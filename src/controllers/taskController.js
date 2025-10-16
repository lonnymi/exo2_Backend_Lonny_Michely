// src/controllers/taskController.js
const Task = require('../models/Task');

class TaskController {
  constructor() {
    this.tasks = [];   // stockage en mémoire (pas de fichier, pas de DB)
    this.nextId = 1;
  }

  listTasks() {
    return this.tasks;
  }

    addTask(title) {
      const task = new Task(this.nextId, title, false); // id puis title
      this.tasks.push(task);
      this.nextId += 1;
      return task;
    }


  deleteTask(id) {
    const idx = this.tasks.findIndex(t => t.id === id);
    if (idx === -1) return false;
    this.tasks.splice(idx, 1);
    return true;
  }
}

module.exports = TaskController;
