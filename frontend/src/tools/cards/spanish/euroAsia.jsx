import { useState } from 'react';
import '../countries.css';
//Bandera de los paises
import Alemania from '@/assets/flags/euroAsia/Alemania.png';
import Belgica from '@/assets/flags/euroAsia/Belgica.png';
import Bulgaria from '@/assets/flags/euroAsia/Bulgaria.png';
import Chequia from '@/assets/flags/euroAsia/Chequia.png';
import Chipre from '@/assets/flags/euroAsia/Chipre.png';
import Croacia from '@/assets/flags/euroAsia/Croacia.png';
import Dinamarca from '@/assets/flags/euroAsia/Dinamarca.png';
import España from '@/assets/flags/euroAsia/España.png';
import Estonia from '@/assets/flags/euroAsia/Estonia.png';
import Finlandia from '@/assets/flags/euroAsia/Finlandia.png';
import Francia from '@/assets/flags/euroAsia/Francia.png';
import Grecia from '@/assets/flags/euroAsia/Grecia.png';
import Holanda from '@/assets/flags/euroAsia/Holanda.png';
import Hungria from '@/assets/flags/euroAsia/Hungria.png';
import Italia from '@/assets/flags/euroAsia/Italia.png';
import Letonia from '@/assets/flags/euroAsia/Letonia.png';
import Lituania from '@/assets/flags/euroAsia/Lituania.png';
import Luxemburgo from '@/assets/flags/euroAsia/Luxemburgo.png';
import Malta from '@/assets/flags/euroAsia/Malta.png';
import Portugal from '@/assets/flags/euroAsia/Portugal.png';
import ReinoUnido from '@/assets/flags/euroAsia/Reino_Unido.png';
import Rusia from '@/assets/flags/euroAsia/Rusia.png';


//Imagenes varias
import leftRow from '@/assets/desing/leftA.png'
import rightRow from '@/assets/desing/rightA.png'
import Footer from '@/tools/footer/footer';

function euroAsiaCountriesES(){

    const Countries=[
        {name:"Alemania", src:Alemania, productos:["Onmiost", "Homo", "Thermogen Tea", "Biocros", "Fem", "Fiber´N Plus", "One C Mix", "Pump Suprime"]},
        {name:"España", src:España, productos:["Ego frutas", "Estop Plus","Dolce Vita", "Super Mix", "Cafezzino", "Undu","Aqtua","IQU"]},
        {name:"Francia", src:Francia, productos:["Magnus Supreme", "Kenyan","Aoé Supreme","Shake Supreme","Pump","Magnus","Onmiplus Açaí","Teatino"]},
        {name:"Holanda", src:Holanda, productos:["TMGN Coffee", "Fem"," Biocros","Teatino Limón","Estop Plus","One C Mix","Uzo Supreme","Ego Life"]},
        {name:"Italia", src:Italia, productos:["Chiva Cola", "Super Mix Supreme","Onmiplus","Flu Y","Magnus","Optimus","Power maker","Probiotic"]},
        {name:"Portugal", src:Portugal, productos:["Super Mix", "Ego Life","Star bien","Undú","One C Mix","Dolce Vita","Ego","Onmi Plus"]},
        {name:"ReinoUnido", src:ReinoUnido, productos:["Magnus","Probiotic","Optimus","Ego Life","Aloe beta","Cafezzino Plus","Onmiplus","Starb"]},
        {name:"Rusia", src:Rusia, productos:["Biocros", "Star bien","Fem","One C Mix","Optimus","Finer'N Plus","Cafezzino Plus","Homo"]},
        
    ]

    const[country, setCountry]=useState(1)
    const totalCountries = Countries.length;
    const maxIndex = Math.max(totalCountries - 3, 0)   // última posición válida 

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
          de los productos puede hacer click en ver más.
        </p>
      </div>
      <div className="slider-viewport">
        <div className="slider-track"  style={{ transform: `translateX(-${country * (100 / 3)}%)` }}>
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

export default euroAsiaCountriesES;