import Footer from "../../tools/footer/footer"
import { useState } from 'react';
import './nutrition.css'
import { Link } from "react-router-dom";

function NutritionCardsEsp(){

    const Nutrition =[
        {
            name:'Omniost',
            system:"Sistema Oseo",
            src:"",
            Description: "Este producto es a base de banano para fortalezer el sistema oseo y evitar la osteoporosis"

        },
        {
            name:'Power Maker',
            system:"Sistema Muscular",
            src:"",
            Description: "Este producto tiene la popiedad de conservar la masa muscular"
        }
    ]

    //Estado Inicial de las tarjetas
    const [cardPoint, setCardPoint] = useState(0)
    const totalCards = Nutrition.length

    //Deslizamiento de tarjetas a la izquierda (Next)
    const NextCard = () =>{
        if(cardPoint + 4 < totalCards ){
                setCardPoint(cardPoint+4)
        }
    }

    //Deslizamiento de tarjetas a la izquierda (Preview)
    const PreviewCard = () =>{
        if(cardPoint-4<=0){
                setCardPoint(cardPoint-4)
        }
        else{
            setCardPoint(0)
        }
    }

    return(
        <>  
            {/* Aqui la tarjetas de los productos*/ }
            <div>
                {Nutrition.map((nutri, index)=>(
                    <div key={index}>
                        <h2>{nutri.name}</h2>
                        <img src={nutri.src} alt={nutri.alt} className="image-flag"/>
                        <p>Sistema:{nutri.system}</p>
                        <p>Descripción:{nutri.Description}</p>

                    </div>
                ))}
            </div>
            <div>
                {/*Aqui va los botones con los efectos de dezlizamiento */}
                <button><img/></button>
                <button><img/></button>
            </div>  
            <Footer/>
        </>
    )

}

export default NutritionCardsEsp