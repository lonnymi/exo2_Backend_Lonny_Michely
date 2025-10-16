# ToDoList API — Express (MVC, in-memory)

A minimal ToDoList API built with Node.js and Express.
It follows a simple MVC structure and provides three actions: add, list, and delete tasks.
Data is kept **in memory** (no database, no files). Restarting the server resets the list.

## Project structure

```
todolist-api/
├─ src/
│  ├─ models/
│  │  └─ Task.js                # Task entity (id, title, completed)
│  ├─ controllers/
│  │  └─ taskController.js      # In-memory logic (list/add/delete)
│  ├─ routes/
│  │  └─ taskRoutes.js          # REST routes for /api/tasks
│  └─ app.js                    # Express app: JSON, CORS, routes
├─ server.js                    # Entry point (loads .env and starts app)
├─ .env                         # Environment variables (PORT, HOST, CORS_ORIGIN)
├─ .gitignore                   # node_modules/, .env, etc.
├─ package.json
└─ README.md
```

## Prerequisites

- Node.js (LTS recommended)
- npm

Check versions:
```bash
node -v
npm -v
```

## Installation

```bash
npm install
```

## Environment

Create a `.env` file at the project root (same folder as `server.js`):

```
PORT=3000
HOST=127.0.0.1
CORS_ORIGIN=*
```

- `PORT` and `HOST` control where the HTTP server listens.
- `CORS_ORIGIN` controls allowed origins for CORS (set to `*` for simplicity).

## Run

Development (auto-restart via nodemon):
```bash
npm run dev
```

Production:
```bash
npm start
```

You should see:
```
Server listening on http://127.0.0.1:3000
```

## API Endpoints

All endpoints are mounted under `/api/tasks`.

| Method | Path                 | Description              | Body (JSON)                  | Responses                              |
|-------:|----------------------|--------------------------|------------------------------|----------------------------------------|
| GET    | `/api/tasks`         | List all tasks           | —                            | 200 OK (array of tasks)                |
| POST   | `/api/tasks`         | Add a new task           | `{ "title": "Some text" }`   | 201 Created (task), 400 if invalid     |
| DELETE | `/api/tasks/:id`     | Delete task by id        | —                            | 204 No Content, 404 if not found       |

### cURL examples (Git Bash / macOS / Linux)

List:
```bash
curl http://127.0.0.1:3000/api/tasks
```

Add:
```bash
curl -X POST http://127.0.0.1:3000/api/tasks   -H 'Content-Type: application/json'   -d '{"title":"Do homework"}'
```

Delete:
```bash
curl -X DELETE http://127.0.0.1:3000/api/tasks/1
```

### cURL examples (Windows PowerShell)

List:
```powershell
curl.exe http://127.0.0.1:3000/api/tasks
```

Add:
```powershell
curl.exe -X POST http://127.0.0.1:3000/api/tasks `
  -H "Content-Type: application/json" `
  -d "{\"title\":\"Do homework\"}"
```

Delete:
```powershell
curl.exe -X DELETE http://127.0.0.1:3000/api/tasks/1
```

## Notes

- Tasks are kept in memory. Stopping the server clears the list.
- To add persistence later, implement file or database storage in the controller without changing the routes.
