import Footer from "../../tools/footer/footer";
import { useState } from 'react';
import './nutrition.css';
import { Link } from "react-router-dom";
import LeftR from '@/assets/desing/leftR.png';
import RightR from '@/assets/desing/rightR.png';

// Productos Omnilife
import Aqtua from "../../assets/products/nutrition/aqtua.jpeg";
import Biocros from "../../assets/products/nutrition/biocros.jpeg";
import Cognos from "../../assets/products/nutrition/cognos.jpeg";
import Fem from "../../assets/products/nutrition/fem.jpeg";
import Homo from "../../assets/products/nutrition/homo.jpeg";
import OneCmix from "../../assets/products/nutrition/onecmix.jpeg";
import OnmiOst from "../../assets/products/nutrition/onmiost.jpg";
import OnmiPlus from "../../assets/products/nutrition/onmiplus.jpeg";
import Power_Maker from "../../assets/products/nutrition/power-maker.jpeg";

function NutritionCardsEsp() {

    const Nutrition = [
        {
            name: 'Aqtua',
            system: "Sistema Cardiovascular",
            src: Aqtua,
            Description: "Suplemento enfocado en potenciar el sistema cardiovascular y la energía celular gracias a su fórmula con Coenzima QH, L-Carnitina y D-Ribosa. Sus principales beneficios generales incluyen el aumento de la energía, la protección antioxidante y el apoyo al metabolismo de las grasas y los músculos."
        },
        {
            name: 'Biocros',
            system: "Sistema Muscular",
            src: Biocros,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'Cognos',
            system: "Sistema Nervioso",
            src: Cognos,
            Description: "Este producto tiene la propiedad de mejorar la función cerebral."
        },
        {
            name: 'Fem',
            system: "Sistema Reproductivo",
            src: Fem,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'Homo',
            system: "Sistema Reproductivo",
            src: Homo,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'OneCMix',
            system: "Sistema Reproductivo",
            src: OneCmix,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'OnmiOst',
            system: "Sistema Reproductivo",
            src: OnmiOst,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'OnmiPlus',
            system: "Sistema Reproductivo",
            src: OnmiPlus,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        },
        {
            name: 'Power Maker',
            system: "Sistema Reproductivo",
            src: Power_Maker,
            Description: "Este producto tiene la propiedad de conservar la masa muscular."
        }
    ];

    // Estado Inicial de las tarjetas
    const [cardPoint, setCardPoint] = useState(0);
    const totalCards = Nutrition.length;

    // Deslizamiento de tarjetas a la derecha (Next)
    const NextCard = () => {
        if (cardPoint + 3 < totalCards) {
            setCardPoint(cardPoint + 3);
        }
    };

    // Deslizamiento de tarjetas a la izquierda (Preview)
    const PreviewCard = () => {
        if (cardPoint - 3 >= 0) {
            setCardPoint(cardPoint - 3);
        } else {
            setCardPoint(0);
        }
    };

    return (
        <>      
            {/* Contenedor de la cuadrícula de tarjetas */}
            <div className="cards">
                {Nutrition.slice(cardPoint, cardPoint + 3).map((nutri, index) => (
                    <div key={index} className="card-container">
                        <div className="card-inner">
                            
                            {/* Parte delantera de la tarjeta */}
                            <div className="card-front">
                                <div className="header-card">
                                    <h2>{nutri.name}</h2>
                                    <img src={nutri.src} alt={nutri.name}/>
                                </div>
                                <div className="text-card">    
                                    <p>Sistema: {nutri.system}</p>
                                    <p className="hint-flip">Pasa el cursor para ver más</p>
                                </div>
                            </div>

                            {/* Parte trasera de la tarjeta (Descripción detallada) */}
                            <div className="card-back">
                                <h3>{nutri.name}</h3>
                                <p><strong>Descripción:</strong></p>
                                <p>{nutri.Description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <div className="button">
                <button onClick={PreviewCard}>
                    <img src={LeftR} alt="Flecha Izquierda"/>
                </button>
                <button onClick={NextCard}>
                    <img src={RightR} alt="Flecha Derecha"/>
                </button>
            </div>  

            <Footer/>
        </>
    );
}

export default NutritionCardsEsp;