import {Link} from 'react-router-dom'
import Footer from "@/tools/footer/footer"
import Flecha_izquierda from '@/assets/desing/left-row.png'
import './languages.css'

function Espanol () {
  return(
    <>
      <header>
        <h1 className="title">¡Aqui puedes consultar que productos son beneficos para tu salud!</h1>
          <div className="div-button">
            <Link className="link" to="/">
            <img src={Flecha_izquierda} className="arrow" alt="Flecha Izq"/>
            Volver
            </Link>
          </div>
      </header>
      <main>
        <p>
          Aqui puedes descubrir más de 120 productos de nutrición y más de 60 productos de belleza para mejorar tu calidad de vida en el activo
          más importante para los seres humanos que es <strong>la salud</strong>, en este espacio puede descubrir el beneficio de cada uno de los 
          productos, la composición de los mismos y consejos practica para consumo y mejoramiento de la condición de sauld.
          Por otra parte la belleza también es un componenete importante para la salud ya que tenemos que cuidar la estetica de nuestro cuerpo como la
          piel para toda las personas, especialmente las mujeres tienen una variedad de productos para resaltar la belleza y al mismo tiempo cuidar 
          la piel    

        </p>
      </main>
      <Footer/>
    </>
  )
}

export default Espanol