import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../server/supabaseClient'; // Asegúrate de importar el cliente de Supabase
import './LR.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signIn({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        alert('Credenciales incorrectas');
        console.error('Error en inicio de sesión', error);
      } else {
        // Si las credenciales son correctas, almacenamos la información del usuario en localStorage
        localStorage.setItem('isAuthenticated', 'true'); // Indicamos que el usuario está autenticado
        localStorage.setItem('user', JSON.stringify({ nombre: user.user_metadata.full_name, email: user.email }));
        navigate('/Redes'); // Redirigimos al usuario a la página principal
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
          <button type="submit" className="boton">Here we go!</button>
        </form>
      </center>
    </div>
  );
}

export default Login;
