# ToDoList API

This project is a ToDoList API built using JavaScript and the Express framework. It follows the MVC architecture and provides functionality to add, remove, and display tasks.

## Project Structure

```
todolist-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the task controller
│   │   └── taskController.js
│   ├── models                # Contains the task model
│   │   └── taskModel.js
│   ├── routes                # Contains the task routes
│   │   └── taskRoutes.js
│   └── config                # Contains database configuration
│       └── database.js
├── tests                     # Contains unit tests
│   └── tasks.test.js
├── .gitignore                # Specifies files to ignore by Git
├── package.json              # npm configuration file
├── jest.config.js           # Jest configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todolist-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run:
```bash
npm start
```

To run tests, use:
```bash
npm test
```

## API Endpoints

- `POST /tasks` - Add a new task
- `DELETE /tasks/:id` - Remove a task by ID
- `GET /tasks` - Retrieve all tasks

## License

This project is licensed under the MIT License.