import React from 'react';
import Card from '../components/Card';
import ButtonBack from '../components/ButtonBack';

const RTipos = () => {
  const types = [
    {
      title: 'LAN (Local Area Network)',
      description: 'Una red local que conecta dispositivos en un área geográfica limitada, como una casa, oficina o escuela.'
    },
    {
      title: 'WAN (Wide Area Network)',
      description: 'Una red que cubre grandes áreas geográficas, como países o continentes, generalmente a través de múltiples redes locales conectadas.'
    },
    {
      title: 'MAN (Metropolitan Area Network)',
      description: 'Una red que abarca una ciudad o una gran área urbana, conectando redes locales más pequeñas.'
    },
    {
      title: 'PAN (Personal Area Network)',
      description: 'Una red pequeña y personal que conecta dispositivos cercanos, como teléfonos móviles y computadoras portátiles.'
    }
  ];

  return (
    <div className="page-container">
      <h1>Tipos de Redes</h1>
      <div className="network-types">
        {types.map((type, index) => (
          <Card key={index} title={type.title} description={type.description} />
        ))}
      </div>
      <ButtonBack />
    </div>
  );
};

export default RTipos;
