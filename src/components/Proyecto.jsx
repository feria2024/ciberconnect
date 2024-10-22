import React from "react";
import Navbar from "./Navbar";
import '../css/proyecto.css'

function Proyecto() {
    return(
        <>
        <Navbar/>
        <div className="homecontainer-proyecto">
            <div className="proyecto">
                <h1>Proyecto CIBER CONNECT</h1>
                <div className="presentacion"><p>Este proyecto busca enseñar que son las redes informaticas, sus topologias,su arquitectura, sus modelos, y como podemos usarla para poder llegar a emprender si algun dia asi se quisiera
                    ya que se ha montado un mini ciber denominado con el nombre de <b>CIBER CONNECT</b> el cual es la pieza principal de nuestro proyecto, a continuacion se te presentara que herramientas fueron usadas para el diseño del proyecto:
                    </p>
                </div>
                <div className="herramientas">
                    <div className="hts">
                        <h2>Vite + React</h2>
                        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg" alt="ViteReact" />
                        <h4>Vite</h4>
                        <p>es una herramienta de desarrollo que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y sencilla para proyectos web modernos. 
                            Esta herramienta es util si te sucede un problema parecido al mio (no fue posible la instalacion de React).
                        </p>
                        <h4>React</h4>
                        <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
                        
                        <h2>Node.js</h2>
                        <img src="https://cdn.openwebinars.net/media/featured_images/blog-que-es-nodejs-.jpg" alt="NOde.js" />
                        <p>Node.js es un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite a los desarrolladores crear aplicaciones escalables y de alto rendimiento</p>
                        
                        <h2>Control de ciber</h2>
                        <img src="https://image.slidesharecdn.com/pptredes-cbm-120606113855-phpapp01/75/Configuracion-de-Control-de-Ciber-CBM-1-2048.jpg" alt="cc" />
                        <p>La apliacion de escritorio que hizo posible el funcionamiento del ciber , es una aplicacion no muy detallada pero si con lo necesario, cuenta con un temporizador, un sistema de descuentos y muchas otras funciones muy interesantes.
                            lo bueno de esta apliacion es su facil uso, ya que solo requiere de una IP para poder enlazar la maquina secundaria con la designada como el administrador.
                        </p>
                        <p>Otras herramientas fisicas que hemos usado fueron:</p>
                        <h2>Router</h2>
                        <img src="https://media.wired.com/photos/6311133e567860ab6c66c672/4:3/w_1888,h_1416,c_limit/Synology-RT6600ax-Gear.jpg" alt="" />
                        <p>Este dispositivo nos permitio llevar la conexion desde un punto a otro ya sea de manera inalambrica o de manera estatica(cableado)</p>

                        <h2>Switch</h2>
                        <img src="https://www.steren.com.sv/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/1876468d9/switch-fast-ethernet-de-8-puertos.jpg" alt="" />
                        <p>Este dispositivo nos permite llevar la conexion del router a otros dispositivos por medio de cableado.</p>

                        <h2>Cables LAN</h2>
                        <img src="https://images.ctfassets.net/aoyx73g9h2pg/3xfElk3jiDgpk6Op79duWo/40626f44ac930947c3e70906421b1622/T568A-vs-T568B-Diagram.jpg" alt="" />
                        <p>Los cables LAN tipo A nos permitieron llevar el internet desde el switch hasta las maquinas y asi poder controlarlas desde el administrador</p>

                        <p>Y tambien el apoyo de los jovenes de el equipo quienes  nos ayudaron a llevar a cabo este proyecto. </p>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Proyecto;