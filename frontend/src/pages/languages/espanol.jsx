import Footer from '../../tools/footer/footer';
import NutritionCardsEsp from '../../pages/nutrition/nutrition-es';
import southAmericaCountries from '../../tools/cards/spanish/southAmerica';
import { Link } from 'react-router-dom';

function NutritionEsp() {
    return(
        <>
            <header>
                <h1>Bienvenido a mi página web</h1>
            </header>
            <main>
                <p className="text">
                    Bienvenido a un espacio creado para cuidarte, sentirte bien y transformar tu bienestar.
                    Has dado un excelente primer paso al decidir priorizar tu salud. Sabemos que sentirse bien va mucho más allá de la apariencia: también implica alimentar tu cuerpo, cultivar hábitos saludables y mantener la motivación para seguir avanzando cada día.
                    En este espacio encontrarás acompañamiento para iniciar o fortalecer un estilo de vida más saludable. Creemos que la salud es uno de los bienes más valiosos que tenemos, y merece ser cuidada con constancia, disciplina y decisiones conscientes.
                    Por eso ponemos a tu disposición 12 productos de nutrición y 60 productos de belleza, formulados para acompañarte en tu camino hacia una mejor versión de ti. Nuestra propuesta se enfoca en opciones libres de químicos, pensadas para que puedas sentirte cómodo, acogido y seguro mientras trabajas por tu bienestar.
                    No necesitas cambiarlo todo de un día para otro. Cada pequeño paso cuenta: elegir mejor, cuidar tu piel, nutrir tu cuerpo y mantener la disciplina. Hoy es el momento ideal para tomar la decisión de mejorar tu salud y conservarla día a día.
                    Tu bienestar comienza con una decisión. Nosotros estaremos aquí para acompañarte.
                </p>
                <NutritionCardsEsp/>
                <br/>
                <h2>¿Quiere conocer más productos?, aqui te dejo el catalogo para los paises.</h2>
                <div className="link-text">
                    <Link><h2 className="title">Sudamérica</h2></Link>
                    <Link><h2 className="title">Centro y Norte América</h2></Link>
                    <Link><h2 className="title">Europa</h2></Link>
                </div>
                {southAmericaCountries()}
            </main>
            <Footer/>
        </>
    )
}

export default NutritionEsp;