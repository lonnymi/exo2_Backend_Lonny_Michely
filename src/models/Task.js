// src/models/Task.js
class Task {
  constructor(id, title, completed = false) {
    this.id = id;           // 1, 2, 3, ...
    this.title = title;     // "Faire les devoirs"
    this.completed = completed; // false par défaut
  }

  // Express utilisera cette méthode pour sérialiser en JSON
  toJSON() {
    return { id: this.id, title: this.title, completed: this.completed };
  }
}

module.exports = Task;
