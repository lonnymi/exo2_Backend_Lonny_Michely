# API Todolist avec Express.js (MongoDB + MySQL)

Une API REST pour gérer une liste de tâches (Todolist) avec **Express.js** et une architecture **MVC**. 
Les tâches sont sauvegardées **simultanément** dans **MongoDB** et **MySQL** (miroir).

## Prérequis
- Node.js installé
- MongoDB en cours d'exécution
- MySQL en cours d'exécution

## Installation
1. Installer les dépendances :
```bash
npm install
```
2. Créer un fichier `.env` à la racine (copier depuis `.env.sample`) :
```
MONGO_URI=mongodb://localhost:27017/todolist
PORT=3000

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=todolist
```
3. Créer la base de données MySQL (si pas déjà faite) :
```sql
CREATE DATABASE IF NOT EXISTS todolist;
```
> La table `tasks` est créée automatiquement au démarrage.

## Lancement
```bash
npm start
# ou en dev
npm run dev
```
Le serveur écoute par défaut sur `http://localhost:${PORT}`.

## Endpoints
- `GET /api/tasks` — liste les tâches
- `POST /api/tasks` — ajoute une tâche `{ "title": "Ma nouvelle tâche" }`
- `DELETE /api/tasks/:id` — supprime une tâche par **ID MongoDB**

## Architecture MVC
```
Exo2/
├── config/
│   ├── db.js          # Connexion MongoDB
│   └── mysql.js       # Connexion MySQL + init table
├── models/
│   ├── Task.js        # Modèle Mongoose
│   └── TaskMySQL.js   # Accès MySQL
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── views/
│   └── index.html
├── server.js
├── .env.sample
└── package.json
```

## Technologies
- Express.js
- MongoDB + Mongoose
- MySQL + mysql2
- dotenv

## Test rapide (curl)
```bash
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title":"Faire les courses"}'
curl -X DELETE http://localhost:3000/api/tasks/<ID_MONGODB>
```
