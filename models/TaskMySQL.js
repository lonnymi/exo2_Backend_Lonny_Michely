import { getMySQL } from '../config/mysql.js';

export async function insertTaskMySQL({ mongo_id, title }) {
  const pool = getMySQL();
  const [res] = await pool.execute(
    'INSERT INTO tasks (mongo_id, title) VALUES (?, ?)',
    [mongo_id, title]
  );
  return res.insertId;
}

export async function getAllTasksMySQL() {
  const pool = getMySQL();
  const [rows] = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  return rows;
}

export async function deleteTaskMySQLByMongoId(mongo_id) {
  const pool = getMySQL();
  await pool.execute('DELETE FROM tasks WHERE mongo_id = ?', [mongo_id]);
}
