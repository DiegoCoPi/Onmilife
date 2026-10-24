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
        <p className="paragraph">
          ¡Bienvenido! Aquí te esperan más de 120 productos de nutrición y más de 60 de belleza,
          pensados para ayudarte a sentirte mejor cada día. Todo parte de lo más valioso que tenemos:{" "}
          <strong>la salud</strong>. Por eso, en este espacio descubrirás para qué sirve cada producto,
          de qué está hecho y cómo incluirlo en tu rutina con consejos prácticos y sencillos.
          <br /><br />
          Y porque cuidarte también es verte bien, encontrarás opciones para resaltar tu belleza
          mientras proteges tu piel, esa carta de presentación que habla de ti. ¿Cuál será el
          primer producto que quieras conocer? Anímate a explorar, ¡hay mucho por descubrir!

          <br/><br/><br/>
          ¡Qué bueno que estes aqui! estas por conocer la mejor decisión que hayas tomado, ya que uno de los más grandes tesoros 
          de los seres humanos es la salud, ya que nos permite vivir en pleitud la vida y aquí te mostrare más de 120 productos
          en nutrición y más de 60 productos de belleza
        </p>
        
      </main>
      <Footer/>
    </>
  )
}

export default Espanol