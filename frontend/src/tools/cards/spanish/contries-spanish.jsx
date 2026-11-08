import Colombia from '../../../assets/flags/Colombia.png';
import España from '../../../assets/flags/España.png';
import '../countries.css';

function spanishCountries(){

    const Countries=[
        {name:"Colombia", src:Colombia},
        {name:"España", src:España}
    ]
    return(
        <>
            <div className="main">
                {Countries.map((country, index) => (
                    <div key={index} className="card-countries">
                        <h2>{country.name}</h2>
                        <img src={country.src} alt={country.name}/>
                    </div>    
                ))}
            </div>
        </>
    )
}

export default spanishCountries;