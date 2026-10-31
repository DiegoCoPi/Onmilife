import Footer from "../../tools/footer/footer"
import { useState } from 'react';
import './nutrition.css'
import { Link } from "react-router-dom";
import LeftR from '@/assets/desing/leftR.png';
import RightR from '@/assets/desing/rightR.png';
import Onmiost from '@/assets/products/nutrition';


function NutritionCardsEsp(){

    const Nutrition =[
        {
            name:'Omniost',
            system:"Sistema Oseo",
            src: Onmiost,
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
                    <div key={index} className="card-main">
                        <div className="header-card">
                            <h2>{nutri.name}</h2>
                            <img src={nutri.src} alt={nutri.name}/>
                        </div>
                        <div className="text-card">    
                            <p>Sistema:{nutri.system}</p>
                            <p>Descripción:{nutri.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {/*Aqui va los botones con los efectos de dezlizamiento */}
                <button><img src={LeftR} alt="Flecha Izquierda"/></button>
                <button><img src={RightR} alt="Flecha Derecha"/></button>
            </div>  
            <Footer/>
        </>
    )

}

export default NutritionCardsEsp