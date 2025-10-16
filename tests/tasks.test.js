const request = require('supertest');
const app = require('../src/app');
const TaskModel = require('../src/models/taskModel');

describe('Task API', () => {
  let taskId;

  beforeAll(async () => {
    // Setup code to initialize the database or clear existing tasks
  });

  afterAll(async () => {
    // Cleanup code to remove tasks from the database
  });

  it('should add a new task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', completed: false });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('task');
    taskId = response.body.task.id; // Assuming the response contains the task ID
  });

  it('should get all tasks', async () => {
    const response = await request(app).get('/tasks');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.tasks)).toBe(true);
  });

  it('should remove a task', async () => {
    const response = await request(app).delete(`/tasks/${taskId}`);
    
    expect(response.status).toBe(204);
  });
});