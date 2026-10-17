import { Link } from 'react-router-dom';
import Colombia from '@/assets/flags/Colombia.png'
import Alemania from '@/assets/flags/Alemania.png'
import ReinoUnido from '@/assets/flags/Reino_Unido.png'
import Rusia from '@/assets/flags/Rusia.png'
import Italia from '@/assets/flags/Italia.png'
import "./cards.css"

function CardFlags() {
    const flags=[
        {
          name:"Colombia", 
          src:Colombia, 
          alt:"Colombia flag", 
          language:"Spanish", 
          Idioma:"Español",
          path:"/espanol",
        },
        {
          name:"Alemania",
          src:Alemania, 
          alt:"Germany flag", 
          language:"German", 
          Idioma:"Deutsch",
          path:"/deutsch",
        },
        {
          name:"Reino Unido", 
          src:ReinoUnido, 
          alt:"United Kingdom flag", 
          language:"English", 
          Idioma:"Inglés",
          path:"/english"
        },
        {
          name:"Rusia", 
          src:Rusia, 
          alt:"Russia flag", 
          language:"Russian", 
          Idioma:"русский язык",
          path:"/русский"
        },
        {
          name:"Italia", 
          src:Italia, 
          alt:"Italy flag", 
          language:"Italian", 
          Idioma:"Italiano",
          path:"/italiano"
        }
    ]

    return(
        <>
          <div className="flags-container">
            {flags.map((flag, index)=>(
              <Link to={flag.path} key={index} className="link-flag" style={{ textDecoration: 'none' }}>
                <div className="card-flag">
                    <img src={flag.src} alt={flag.alt} className="image-flag"/>
                    <p className="letters">{flag.language}</p>
                    <p className="letters">{flag.Idioma}</p>
                </div>
              </Link>
            ))} 
          </div>
        </>
    )
}

export default CardFlags;