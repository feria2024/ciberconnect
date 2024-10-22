import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../css/tipos.css'

function RTipos () {

  const types = [
    {
      title: 'LAN (Local Area Network)',
      description: 'Una LAN conecta equipos a una distancia relativamente corta, lo que les permite compartir datos, archivos y recursos. Por ejemplo, una LAN puede conectar todas las computadoras en un edificio de oficinas, escuela u hospital. Por lo general, las LAN son de propiedad privada y están gestionadas por los propietarios'
    },
    {
      title: 'WAN (Wide Area Network)',
      description: 'Una WLAN es como una LAN, pero las conexiones entre dispositivos en la red se realizan de forma inalámbrica'
    },
    {
      title: 'MAN (Metropolitan Area Network)',
      description: 'Como su nombre lo indica, una WAN conecta computadoras en un área amplia, como de una región a otra o incluso de un continente a otro. Internet es la WAN más grande, y conecta miles de millones de computadoras en todo el mundo. Normalmente, hay modelos de propiedad colectiva o distribuida en la gestión de una WAN'
    },
    {
      title: 'PAN (Personal Area Network)',
      description: 'Una PAN atiende a una persona. Por ejemplo, si tiene un iPhone y una Mac, es muy probable que haya configurad una PAN que comparta y sincronice contenidos (mensajes de texto, correos electrónicos, fotos, etc.) en ambos dispositivos.'
    },
    {
      title: 'SAN(Red de area de almacenamiento)',
      description:'Una SAN es una red especializada que proporciona acceso al almacenamiento a nivel de bloque; es una red compartida o almacenamiento en la nube que, para el usuario, se ve y funciona como una unidad de almacenamiento conectada físicamente a una computadora.'
    },
    {
      title: 'CAN(red de area de campus)',
      description:'Una CAN también se conoce como red de área corporativa. Una CAN es más grande que una LAN pero más pequeña que una WAN. Las CAN sirven a sitios como colegios, universidades y campus de negocios'
    },
    {
      title:  'VPN(red privada virtual)',
      description:'Una VPN es una conexión segura de punto a punto entre dos puntos finales de red (consulte "nodos" más adelante). Una VPN establece un canal cifrado que mantiene la identidad y las credenciales de acceso de un usuario, así como cualquier dato transferido, inaccesible para los hackers'

    }
  ];

  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className='tite'>TIPOS DE REDES</h1>
      <div className="network-types">
        {types.map((type, index) => (
          <Card key={index} title={type.title} description={type.description} />
        ))}
      </div>
    </div>
    </>
  );
};

export default RTipos;
