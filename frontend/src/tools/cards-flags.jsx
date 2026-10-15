import Colombia from '../assets/flags/Colombia.png'
import Alemania from '../assets/flags/Alemania.png'
import ReinoUnido from '../assets/flags/Reino_Unido.png'
function CardFlags() {
    const flags=[
        {name:"Colombia", src:Colombia, alt:"Colombia flag", language:"Spanish", Idioma:"Español"},
        {name:"Alemania", src:Alemania, alt:"Germany flag", language:"German", Idioma:"Deutsch"},
        {name:"Reino Unido", src:ReinoUnido, alt:"United Kingdom flag", language:"English", Idioma:"Inglés"}
    ]

    return(
        <>
            <div>
              {flags.map((flag, index)=>(
                <div key={index}>
                  <img src={flag.src} alt={flag.alt} />
                  <p>{flag.language}</p>
                  <p>{flag.Idioma}</p>
                </div>
              ))}  
            </div>
        </>
    )

}

export default CardFlags