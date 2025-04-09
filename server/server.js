const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Registro de usuario
app.post('/Register', async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ nombre, apellido, email, password: hashedPassword }]);

  if (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error al registrar usuario' });
  }

  res.send({ message: 'Usuario registrado correctamente' });
});

// Login de usuario
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    return res.send({ success: false, message: 'Correo no encontrado' });
  }

  const match = await bcrypt.compare(password, data.password);
  if (!match) {
    return res.send({ success: false, message: 'Contraseña incorrecta' });
  }

  res.send({ success: true, user: { id: data.id, nombre: data.nombre, email: data.email } });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
