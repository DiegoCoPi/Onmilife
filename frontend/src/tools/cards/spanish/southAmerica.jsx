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

function southAmericaCountries(){

    const Countries=[
        {name:"Colombia", src:Colombia},
        {name:"Bolivia", src:Bolivia},
        {name:"Brasil", src:Brasil},
        {name:"Argentina", src:Argentina},
        {name:"Perú", src:Peru},
        {name:"Chile", src:Chile},
        {name:"Paraguay", src:Paraguay},
        {name:"Urugay", src:Uruguay}
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
    <div className="slider-viewport">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${country * 25}%)` }}
      >
        {Countries.map((item, index) => (
          <div key={index} className="slide">
            <div className="card-countries">
              <h2>{item.name}</h2>
              <img src={item.src} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="class-arrow">
      <button onClick={prevCountry}><img src={leftRow} alt="Anterior" /></button>
      <button onClick={nextCountry}><img src={rightRow} alt="Siguiente" /></button>
    </div>
  </>
)
}

export default southAmericaCountries;