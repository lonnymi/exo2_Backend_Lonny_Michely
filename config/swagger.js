export const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'Todo API',
    description: 'API for managing todo tasks with MongoDB and MySQL',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/tasks': {
      get: {
        summary: 'Get all tasks',
        description: 'Retrieve a list of all tasks',
        responses: {
          200: {
            description: 'A list of tasks',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Task',
                  },
                },
              },
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },
      post: {
        summary: 'Create a new task',
        description: 'Add a new task to the database',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TaskInput',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Task created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          400: {
            description: 'Invalid input',
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
    '/api/tasks/{id}': {
      delete: {
        summary: 'Delete a task',
        description: 'Delete a task by its ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the task to delete',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Task deleted successfully',
          },
          404: {
            description: 'Task not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Task: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Task ID',
          },
          title: {
            type: 'string',
            description: 'Task title',
          },
          completed: {
            type: 'boolean',
            description: 'Task completion status',
          },
        },
      },
      TaskInput: {
        type: 'object',
        required: ['title'],
        properties: {
          title: {
            type: 'string',
            description: 'Task title',
          },
          completed: {
            type: 'boolean',
            description: 'Task completion status',
            default: false,
          },
        },
      },
    },
  },
};