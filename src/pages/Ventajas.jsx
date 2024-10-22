import React from 'react';
import Card from '../components/Card';
import ButtonBack from '../components/ButtonBack';

const AdvantagesDisadvantages = () => {
  const networks = [
    {
      title: 'LAN (Local Area Network)',
      advantages: 'Alta velocidad de transferencia, bajo costo de implementación, control centralizado.',
      disadvantages: 'Limitada a áreas geográficas pequeñas, vulnerable a problemas locales como fallos de energía.'
    },
    {
      title: 'WAN (Wide Area Network)',
      advantages: 'Cobertura de largas distancias, conecta redes LAN en diferentes ubicaciones.',
      disadvantages: 'Alto costo de mantenimiento, menor velocidad comparada con LAN.'
    },
    {
      title: 'MAN (Metropolitan Area Network)',
      advantages: 'Cobertura en áreas urbanas, útil para conectar redes de empresas o instituciones cercanas.',
      disadvantages: 'Costoso de mantener, requiere de infraestructura avanzada.'
    },
    {
      title: 'PAN (Personal Area Network)',
      advantages: 'Fácil de configurar, bajo costo, ideal para uso personal.',
      disadvantages: 'Alcance muy limitado, vulnerable a interferencias.'
    }
  ];

  return (
    <div className="page-container">
      <h1>Ventajas y Desventajas de las Redes</h1>
      <div className="network-comparisons">
        {networks.map((network, index) => (
          <Card 
            key={index} 
            title={network.title} 
            description={
              <>
                <strong>Ventajas:</strong> {network.advantages}<br/>
                <strong>Desventajas:</strong> {network.disadvantages}
              </>
            } 
          />
        ))}
      </div>
      <ButtonBack />
    </div>
  );
};

export default AdvantagesDisadvantages;
