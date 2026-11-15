import { useState } from 'react';
import '../../../tools/cards/countries.css';
//Bandera de los paises
import Colombia from '../../../assets/flags/southamerica/Colombia.png';
import Bolivia from '../../../assets/flags/southamerica/Bolivia.png';
import Brasil from '../../../assets/flags/southamerica/Brasil.png';
import Argentina from '../../../assets/flags/southamerica/Argentina.png';
import Chile from '../../../assets/flags/southamerica/Chile.png';
import Peru from '../../../assets/flags/southamerica/Peru.png';
import Paraguay from '../../../assets/flags/southamerica/Paraguay.png';
import Uruguay from '../../../assets/flags/southamerica/Uruguay.png';


//Imagenes varias
import leftRow from '../../../assets/desing/leftA.png'
import rightRow from '../../../assets/desing/rightA.png'
import Footer from '../../footer/footer';

function southAmericaCountriesES(){

    const Countries=[
        {name:"Colombia", src:Colombia, productos:["Onmiost", "Homo", "Thermogen Tea", "Biocros", "Fem", "Fiber´N Plus", "One C Mix", "Pump Suprime"]},
        {name:"Bolivia", src:Bolivia, productos:["Ego frutas", "Estop Plus","Dolce Vita", "Super Mix", "Cafezzino", "Undu","Aqtua","IQU"]},
        {name:"Brasil", src:Brasil, productos:["Magnus Supreme", "Kenyan","Aoé Supreme","Shake Supreme","Pump","Magnus","Onmiplus Açaí","Teatino"]},
        {name:"Argentina", src:Argentina, productos:["TMGN Coffee", "Fem"," Biocros","Teatino Limón","Estop Plus","One C Mix","Uzo Supreme","Ego Life"]},
        {name:"Perú", src:Peru, productos:["Chiva Cola", "Super Mix Supreme","Onmiplus","Flu Y","Magnus","Optimus","Power maker","Probiotic"]},
        {name:"Chile", src:Chile},
        {name:"Paraguay", src:Paraguay},
        {name:"Uruguay", src:Uruguay}
    ]

    const[country, setCountry]=useState(0)
    const totalCountries = Countries.length;
    const maxIndex = Math.max(totalCountries - 4, 0)   // última posición válida (4 visibles)

const prevCountry = () => {
  setCountry(country > 0 ? country - 1 : maxIndex)
}

const nextCountry = () => {
  setCountry(country < maxIndex ? country + 1 : 0)
}

return (
  <>
    <header>
      <h1 className="title">Elija el país para ver la disponibilidad de los productos</h1>
    </header>
    <main>
      <div className="paragraph">
        <p>
          Aqui en sudamerica la fabrica que abastece a toda sudamerica esta ubicado en Guachené, Cauca en Colombia
          aqui puede encontrar los productos que estan disponibles en el país sudamericano que se encuentre, aqui te dejo
          algunos productos disponibles en los paises, seleciona el mismo y veras el listado, si quiere tener mas información
          de los productos puede acer click en ver más.
        </p>
      </div>
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translateX(-${country * 33}%)` }}>
          {Countries.map((item, index) => (
            <div key={index} className="slide">
              <div className="flip-south">
                <div className="flip-inner-south">
                  {/* Parte delantera */}
                  <div className="card-front-south">
                    <h2>{item.name}</h2>
                    <img src={item.src} alt={item.name} />
                  </div>
                  {/* Parte trasera */}
                  <div className="card-back-south">
                    <h2>Algunos productos en: {item.name}</h2>
                    {item.productos?.length > 0?(
                      <div className="list">
                        <ul>
                          {item.productos.map((producto, i)=>(
                            <li key={i}>{producto}</li>))}
                        </ul>
                        <div className="button-main">
                          <button className="button-see">Ver más</button>
                        </div>
                      </div>
                    ):(<p>Proximamente</p>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="class-arrow">
        <button onClick={prevCountry}><img src={leftRow} alt="Anterior" /></button>
        <button onClick={nextCountry}><img src={rightRow} alt="Siguiente" /></button>
      </div>
    </main>  
    <Footer/>

  </>
)
}

export default southAmericaCountriesES;