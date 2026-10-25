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
          ¡Felicitacones por estar aqui! has tomado una decisión que te mejora la calidad de vida ademas de ayudar a conservar y
          mejorar el bien más preciado de todos que es <strong>la salud,</strong> ya que con ella nos permite vivir experiencias
          que brinda el día a día, para ayudarte a solventar las dolencias o querer mantener el buen estado de salud aqui podras
          tener información acerca de los más de 120 productos de nutrición y de más de 60 productos de belleza. 
          
          <br/><br/>
          La salud se compone de la buena alimentación y el cuidado de la piel por eso estos productos esta pensado en nosotros
          ya que no son cocentrados químicamente sino a base de productos orgánicos y naturales, este espacio esta ideado para que
          conozca el beneficio al cuerpo, especificamente en que sistema del cuerpo humano actua junto con los beneficios de los 
          productos de <strong>Seytú</strong>, a continuación mostraré los productos, la composición y los beneficios que traen
          al sistema del cuerpo.

          <div>
            <h2>Consulte los productos Aqui</h2>
            <div className='health'>
              <Link to="/nutrition-es"><p>Nutrición</p></Link>
              <Link to="/beautiful-es"><p>Belleza</p></Link>
            </div>
          </div>

          <h2>Elije tu region</h2>

          <div className="link-region">
            <Link to="/"><h3>Sudamerica</h3></Link>
            <Link><h3>Centro y Norteamerica</h3></Link>
            <Link><h3>Europa</h3></Link>
          </div>

        </p>
        
      </main>
      <Footer/>
    </>
  )
}

export default Espanol