import React from 'react';
import ButtonBack from '../components/ButtonBack';

const Home = () => {
  return (
    <div className="page-container">
      <h1>¿Qué es una Red?</h1>
      <p>
        Una red es un conjunto de dispositivos conectados entre sí que se comunican y comparten información, 
        recursos y servicios. Estos dispositivos pueden incluir computadoras, servidores, impresoras, 
        teléfonos móviles, entre otros.
      </p>
      <p>
        El propósito principal de una red es permitir la transmisión de datos de forma rápida y segura entre 
        dispositivos conectados, optimizando recursos y facilitando la colaboración.
      </p>
      <h2>¿Cómo funciona una red?</h2>
      <p>
        Una red funciona a través de protocolos de comunicación, como TCP/IP, que regulan la forma en la que 
        los dispositivos se identifican y transmiten información. Las redes también dependen de hardware como 
        routers, switches y cables para permitir la conectividad física entre los dispositivos.
      </p>
      <ButtonBack />
    </div>
  );
};

export default Home;
