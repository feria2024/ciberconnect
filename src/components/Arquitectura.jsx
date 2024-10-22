import React from "react";
import Navbar from "./Navbar";
import '../css/tipos.css';
import '../css/arquitectura.css'
function Arquitectura () {
    return (
        <>
        <Navbar />
        <div className="arq-container">
            <div className="arq-title"><h1>Arquitectura</h1>
            </div>
            <div className="content"><p>La arquitectura de red de computadoras define el marco físico y lógico de la red. Describe cómo se organizan las computadoras en la red y qué tareas se asignan a cada una de ellas.
            Los componentes de arquitectura de red incluyen hardware, software, medios de transmisión (cableados o inalámbricos), topología de red y protocolos de comunicaciones.
            </p>
            </div>
            <div className="sub-title"><h2>Principales tipos de arquitectura de <span>Red</span></h2>
            </div>
            <div className="content">Hay dos tipos de arquitectura de red: entre pares (P2P) y cliente/servidor. En la arquitectura P2P, dos o más computadoras están conectadas como "pares", lo que significa que tienen la misma potencia y privilegios en la red. Una red P2P no requiere un servidor central para coordinarse.
                 En cambio, cada equipo de la red actúa como cliente (una computadora que necesita acceder a un servicio) y un servidor (una computadora que atiende las necesidades del cliente que accede a un servicio). Cada par pone algunos de sus recursos a disposición de la red, compartiendo almacenamiento, memoria, ancho de banda
                  y potencia de procesamiento.En una red cliente/servidor, un servidor central o un grupo de servidores administra los recursos y presta servicios a los dispositivos cliente de la red. Los clientes de la red se comunican con otros clientes a través del servidor. A diferencia del modelo P2P, los clientes en una arquitectura cliente/servidor 
                  no comparten sus recursos. Este tipo de arquitectura se denomina a veces modelo escalonado porque está diseñado con varios niveles o escalones.
            </div>
            <div className="sub-title"><h2>Topologias de red</h2></div>
            <div className="content"><p>La topología de red se refiere a cómo se organizan los nodos y enlaces de una red. Un nodo de red es un dispositivo que puede enviar, recibir, almacenar o reenviar datos. Un enlace de red conecta nodos y puede ser cableado o inalámbrico. <br />
                Comprender los tipos de topología proporciona la base para construir una red exitosa. Existen varias topologías, pero las más comunes son bus, anillo, estrella y malla:
                </p>
                <ul className="topologias">
                    <li>Una topología de red de bus se da cuando cada nodo de la red está conectado directamente a un cable principal.</li>
                    <li>En una topología de anillo, los nodos están conectados en un bucle, por lo que cada dispositivo tiene exactamente dos vecinos. Los pares adyacentes están conectados directamente; los pares no adyacentes se conectan indirectamente a través de varios nodos</li>
                    <li>En una topología de red de estrella, todos los nodos están conectados a un único centro y cada nodo está indirectamente conectado a través de ese centro</li>
                    <li>Una topología de malla se define mediante conexiones superpuestas entre nodos. Puede crear una topología de malla completa, en la que cada nodo de la red
                        esté conectado a cualquier otro nodo. También puede crear una topología de malla parcial, en la que solo algunos nodos están conectados entre sí y otros
                        están conectados a los nodos con los que intercambian más datos. La topología de malla completa puede ser costosa y llevar mucho tiempo de ejecución,
                        por lo que a menudo se reserva para redes que requieren alta redundancia. La malla parcial proporciona menos redundancia pero es más rentable y más simple de ejecutar</li>
                </ul>
            </div>
            <div className="Modelo-OSI">
                <div className="sub-title"><h1>Modelo OSI</h1></div>
                    <div className="content"><p>El modelo Open Systems Interconnection (OSI) es un modelo conceptual creado por la Organización Internacional para la Estandarización, el cual permite que diversos sistemas de comunicación se conecten usando protocolos estándar. En otras palabras, el OSI proporciona un estándar para que distintos sistemas de equipos puedan comunicarse entre sí. <br /><br />
                        El modelo OSI se puede ver como un lenguaje universal para la conexión de las redes de equipos. Se basa en el concepto de dividir un sistema de comunicación en siete capas abstractas, cada una apilada sobre la anterior.
                        </p><br />
                        <p>Cada capa del modelo OSI tiene una función específica y se comunica con las capas superiores e inferiores. Los ataques DDoS se dirigen a capas específicas de una conexión de red, los ataques a la capa de aplicación se dirigen a la capa 7, mientras que los ataques a la capa de protocolo se dirigen a las capas 3 y 4.</p>
                    </div>
                    <div className="7-capas"><h2>Las 7 capas del modelo OSI</h2></div>
                    <div className="capa"><h4>7.Capa de aplicación</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/2rcDKpr4WLqoyAZ7GDKkyJ/7cab96402de7ac5465b86e617da3da4e/osi_model_application_layer_7.png" alt="Capa 7" /><br />
                        Esta es la única capa que interactúa directamente con los datos del usuario. Las aplicaciones de software, como los navegadores web y los clientes de correo electrónico, dependen de la capa de aplicación para iniciar las comunicaciones. Sin embargo, debe quedar claro que las aplicaciones de software cliente no forman parte de la capa de aplicación; más bien, la capa de aplicación es responsable de los protocolos y la manipulación de datos de los que depende el software para presentar datos significativos al usuario. <br />
                        Los protocolos de la capa de aplicación incluyen HTTP, así como también SMTP (el protocolo simple de transferencia por correo electrónico, uno de los protocolos que permiten las comunicaciones por correo electrónico).
                    </div>
                    <div className="capa"><h4>6. Capa de presentación</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/19L86neKKT8srUkOSe4rf7/ff4c91c94a1790651df7b48433913f59/osi_model_presentation_layer_6.png" alt="Capa 6" /><p>Esta capa es principalmente responsable de preparar los datos para que los pueda usar la capa de aplicación; en otras palabras, la capa 6 hace que los datos se preparen para su consumo por las aplicaciones. La capa de presentación es responsable de la traducción, el cifrado y la compresión de los datos. <br />
                        Dos dispositivos de comunicación que se conectan entre sí podrían estar usando distintos métodos de codificación, por lo que la capa 6 es la responsable de traducir los datos entrantes en una sintaxis que la capa de aplicación del dispositivo receptor pueda comprender.</p></div>
                    <div className="capa"><h4>5. Capa de sesión</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/29mRrgK22AqJVlg2MMlD86/34d8f4071b6cc0d3b03c93f55e4d89b7/osi_model_session_layer_5.png" alt="Capa 5" /><p>La capa de sesión es la responsable de la apertura y cierre de comunicaciones entre dos dispositivos. Ese tiempo que transcurre entre la apertura de la comunicación y el cierre de esta se conoce como sesión. La capa de sesión garantiza que la sesión permanezca abierta el tiempo suficiente como para transferir todos los datos que se están intercambiando; tras esto, cerrará sin demora la sesión para evitar el desaprovechamiento de recursos.</p>
                    </div>
                    <div className="capa"><h4>4. Capa de transporte</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/3OlO75NcADGL3SmEADFDqd/723b8c7639c4e2e6b4febcbe7fd36e0e/osi_model_transport_layer_4.png" alt="Capa 4" /><p>La capa 4 es la responsable de las comunicaciones de extremo a extremo entre dos dispositivos. Esto implica, antes de proceder a ejecutar el envío a la capa 3, tomar datos de la capa de sesión y fragmentarlos seguidamente en trozos más pequeños llamados segmentos. La capa de transporte del dispositivo receptor es la responsable luego de rearmar tales segmentos y construir con ellos datos que la capa de sesión pueda consumir.</p>
                    </div>
                    <div className="capa"><h4>3. Capa de red</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/3g2Hv0frHsql5SFauJL5EG/d8cede7b6a780e63413bd86de9eee7f9/osi_model_network_layer_3.png" alt="Capa 3" /><p>La capa de red es responsable de facilitar la transferencia de datos entre dos redes diferentes. Si los dispositivos que se comunican se encuentran en la misma red, entonces la capa de red no es necesaria. Esta capa divide los segmentos de la capa de transporte en unidades más pequeñas, llamadas paquetes, en el dispositivo del emisor, y vuelve a juntar estos paquetes en el dispositivo del receptor. La capa de red también busca la mejor ruta física para que los datos lleguen a su destino; esto se conoce como enrutamiento.</p>
                    </div>
                    <div className="capa"><h4>2. Capa de enlace de datos</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/3TLHavXiotb9ayyZFKECf3/9456d1c431cd71ceea7f4b407f076f11/data_link_layer_osi_model.png" alt="Capa 2" /><p>La capa de enlace de datos es muy similar a la capa de red, excepto que la capa de enlace de datos facilita la transferencia de datos entre dos dispositivos dentro la misma red. La capa de enlace de datos toma los paquetes de la capa de red y los divide en partes más pequeñas que se denominan tramas. Al igual que la capa de red, esta capa también es responsable del control de flujo y el control de errores en las comunicaciones dentro de la red (la capa de transporte solo realiza tareas de control de flujo y de control de errores para las comunicaciones dentro de la red).</p>
                    </div>
                    <div className="capa"><h4>1. Capa física</h4></div>
                    <div className="capa-content"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/1HQ1W5P4XAinIdM37DTu4U/900ccdceda346baf03ce8b9f977d2974/osi_model_physical_layer_1.png" alt="Capa 1" /><p>Esta capa incluye el equipo físico implicado en la transferencia de datos, tal como los cables y los conmutadores de red. Esta también es la capa donde los datos se convierten en una secuencia de bits, es decir, una cadena de unos y ceros. La capa física de ambos dispositivos también debe estar de acuerdo en cuanto a una convención de señal para que los 1 puedan distinguirse de los 0 en ambos dispositivos.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Arquitectura;

