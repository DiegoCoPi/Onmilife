import {Link} from 'react-router-dom'
import Flecha_izquierda from '@/assets/desing/left-row.png'
import './languages.css'

function Espanol () {
  return(
    <>
      <header>
        <h1 className="title">¡Aqui puedes consultar que productos son beneficos para tu salud!</h1>
          <Link className="link" to="/">
          <img src={Flecha_izquierda} className="arrow" alt="Flecha Izq"/>
          Volver
          </Link>
      </header>
      <main>
        <p>
          Aqui podras encontrar las mejores recomendaciones, productos y recomendaciones que le ayudará a mejorar y conservar tu cuerpo a traves de la nutrición
          y belleza, aqui podras encontrar diversos productos en nutrición y belleza para mejorar y conservar el mejor estado de salud, con opciones para ayudar a
          tratar falencias y enfermedades, conservar la salud ademas de enbellezer y mejoarar el aspecto físico y estético.
        </p>
      </main>
    </>
  )
}

export default Espanol