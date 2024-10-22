// ./src/pages/Recommendednetwork.jsx
import React from 'react';

// Componente Recommendednetwork
function RedR() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recommended Network</h1>
      <p style={styles.description}>
        Aquí encontrarás las recomendaciones más adecuadas basadas en tus intereses de red y conexiones.
      </p>
      <ul style={styles.networkList}>
        <li style={styles.networkItem}>Conexión 1: Nombre de Red 1</li>
        <li style={styles.networkItem}>Conexión 2: Nombre de Red 2</li>
        <li style={styles.networkItem}>Conexión 3: Nombre de Red 3</li>
        <li style={styles.networkItem}>Conexión 4: Nombre de Red 4</li>
      </ul>
    </div>
  );
}

// Estilos en línea para mayor personalización
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  networkList: {
    listStyleType: 'none',
    padding: 0,
  },
  networkItem: {
    backgroundColor: '#eaeaea',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    fontSize: '1rem',
  },
};

export default RedR;
