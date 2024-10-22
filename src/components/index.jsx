import React from "react";
import '../css/index.css'
import Logo from '../assets/logoprincipal.png'
import { Link } from "react-router-dom";

function Home () {
  return(
    <>
    <div className="principal">
      <div className="home">
        <img src={Logo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <h2>¿Quieres conocer sobre REDES?</h2>
        <p>Accede a nuestro sitio y conoce alguna informacion que pueda ser interesante para ti</p>
      </div>
      <div className="buttons">
        <div className="button">
        <Link to='/register'><h4>Registro</h4></Link>
        </div>
        <div className="button">
        <Link to='/login'><h4>Iniciar Sesion</h4></Link>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;



