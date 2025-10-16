// server.js
require('dotenv').config();               // charge .env AVANT tout
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
