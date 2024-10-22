import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LR.css'


function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', credentials);
      if (response.data.success) {
        // Si las credenciales son correctas, almacenamos la información del usuario en localStorage
        localStorage.setItem('isAuthenticated', 'true'); // Indicamos que el usuario está autenticado
        navigate('/Redes'); // Redirigimos al usuario al home
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en inicio de sesión', error);
    }
  };

  return (
    <div className="form-container">
      <center>
      <h2>Iniciar Sesión</h2>
      <button onClick={() => navigate('/')} className='boton'>Back to Home</button>
      <form onSubmit={handleSubmit} className='login-form'>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit" className="boton">Here we go!</button>
      </form>
      </center>
    </div>
  );
}


const handleLogin = () => {
  if (validacionExitosa) {
    localStorage.setItem('user', JSON.stringify({ nombre: 'Juan', email: 'juan@example.com' }));
    window.location.href = '/';
  }
};


export default Login;
