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
  user: process.env.DB_USER || 'root',  // Usa variables de entorno
  password: process.env.DB_PASSWORD || '0000',
  database: process.env.DB_NAME || 'redes',
  port: process.env.DB_PORT || '3307',
});

// Conexión a la base de datos
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Registro de usuario
app.post('/Register', async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña

  const sql = 'INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err); // Log de error
      return res.status(500).send({ message: 'Error en el registro' });
    }
    res.status(201).send({ message: 'Usuario registrado' });
  });
});

// Login de usuario
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error(err); // Log de error
      return res.status(500).send({ message: 'Error en el inicio de sesión' });
    }

    if (results.length > 0) {
      const user = results[0];
      const match = await bcrypt.compare(password, user.password); // Compara contraseñas
      if (match) {
        res.send({ success: true });
      } else {
        res.send({ success: false, message: 'Contraseña incorrecta' });
      }
    } else {
      res.send({ success: false, message: 'Usuario no encontrado' });
    }
  });
});

// Iniciar el servidor
app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000');
});
