import {Link} from 'react-router-dom'
import './languages.css'

function Espanol () {
  return(
    <>
      <header>
        <div>
          <h1>¡Bienvenidos al blog de la belleza y la nutrición!</h1>
          <Link to="/">Volver</Link>
        </div>
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