import React from 'react';
import Navbar from './Navbar';
import '../css/home.css'
const Redes = () => {
  return (
    <div className="page-container">
      <Navbar/>
      <div className="info">
        <center>
      <h1>¿Qué es una red informatica?</h1>
      <p>
      Una red de computadoras comprende dos o más computadoras conectadas, ya sea por cables (cableadas) o WiFi (inalámbrico),
       con el propósito de transmitir, intercambiar o compartir datos y recursos. Se construye una red informática utilizando 
       hardware (p. ej., enrutadores, conmutadores, puntos de acceso y cables) y software (por ejemplo, sistemas operativos o aplicaciones comerciales).
      </p>
      <p>La ubicación geográfica a menudo define una red informática. Por ejemplo, una LAN (red de área local) conecta computadoras
         en un espacio físico definido, como un edificio de oficinas, mientras que una WAN (red de área amplia) puede conectar 
         computadoras a través de continentes. Internet es el mayor ejemplo de una WAN, que conecta miles de millones de computadoras en todo el mundo.
      </p>
      <img src="https://www.pandaredes.com/wp-content/uploads/2021/10/certificaciones-de-redes-002-scaled.jpg" alt="" />
      <br />
      <p>Puede definir aún más una red informática mediante los protocolos que utiliza para comunicarse, la disposición física de sus componentes,
         cómo controla el tráfico y su propósito.</p>
      <p>
      Las redes de computadoras permiten la comunicación para cualquier fin de negocios, de entretenimiento y de investigación.
       El Internet, la búsqueda en línea, el correo electrónico, el intercambio de audio y video, el comercio en línea, las transmisiones en vivo
        y las redes sociales existen gracias a las redes de computadoras.
      </p>
      <h2>¿Cómo funciona una red?</h2>
      <p>Las redes de computadoras conectan nodos como computadoras, enrutadores y conmutadores mediante cables, fibra óptica o señales inalámbricas. Esas conexiones permiten a los dispositivos de una red comunicarse y compartir información y recursos. <br /> <br />
        Las redes siguen protocolos, que definen cómo se envían y reciben las comunicaciones. Estos protocolos permiten la comunicación de dispositivos. Cada dispositivo en una red utiliza un Internet Protocol o dirección IP, una cadena de números que identifica de forma única un dispositivo y permite que otros lo reconozcan. <br /><br /> 
        Los enrutadores son dispositivos físicos o virtuales que facilitan las comunicaciones entre diferentes redes. Los enrutadores analizan la información para determinar la mejor manera de que los datos lleguen a su destino final. Los conmutadores conectan dispositivos y administran la comunicación de nodo a nodo dentro
        de una red, asegurando que los paquetes de información que viajan a través de la red lleguen a su destino final.</p>
      </center>
      </div>
    </div>
  );
};

export default Redes;