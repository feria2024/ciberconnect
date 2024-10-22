import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LR.css'

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/register', formData);
      navigate('/redes'); // Redirige a login después de registro exitoso
    } catch (error) {
      console.error('Error registrando usuario', error);
    }
  };

  return (
    <div className="form-container">
      <h1 className='ref'>Registrarse</h1>
      <button onClick={() => navigate('/')} className='boton'>Back to Home</button>
      <form onSubmit={handleSubmit} className='register-form'>
        <center>
        <div>
          <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        </div>
        <div>
          {/* Botón de submit para enviar el formulario */}
          <button type="submit" className='boton'>Registrar</button>
        </div>
      </center>
      </form>
    </div>
  );
}

export default Register;
