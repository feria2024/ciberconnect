import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../server/supabaseClient'; // Asegúrate de importar el cliente de Supabase
import './LR.css';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Registro de usuario en Supabase
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            nombre: formData.nombre,
            apellido: formData.apellido,
          },
        },
      });

      if (error) {
        alert('Error al registrar: ' + error.message);
        console.error('Error registrando usuario', error);
      } else {
        // Aquí puedes almacenar información adicional si es necesario
        alert('Registro exitoso. Por favor verifica tu email.');
        navigate('/redes'); // Redirige a la página de inicio o login después del registro exitoso
      }
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
            <button type="submit" className='boton'>Registrar</button>
          </div>
        </center>
      </form>
    </div>
  );
}

export default Register;
