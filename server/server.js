// Importa las librerías necesarias
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
require('dotenv').config(); // Para manejar variables de entorno

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'redes',
  port: '3307',
});

// Conexión a la base de datos
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Registro de usuario
app.post('/Register', async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const sql = 'INSERT INTO users (nombre, apellido, email,password) values(?,?,?,?)';
  db.query(sql, [nombre, apellido , email, password], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Usuario registrado' });
  });
});

// Login de usuario
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
        res.send({ success: true });
      } else {
      res.send({ success: false });
    }
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) throw err;
    console.log('Query result:', results[0].result); // Debería imprimir 2
});
