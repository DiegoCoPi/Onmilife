import Footer from '../../tools/footer/footer';
import NutritionCardsEsp from '../../pages/nutrition/nutrition-es';

function NutritionEsp() {
    return(
        <>
            <header>
                <h1>Bienvenido a mi página web</h1>
            </header>
            <main>
                <p>
                    Ha tomado un excelente primer paso para cuidar su salud, sabemos que la salud no es solo belleza,
                    tambien la compone la parte nutricional, es decir lo que comemos y bebemos todos los días, por eso
                    existe este espacio para las personas que quieren y/o mantener un estilo de vida saludable ya que 
                    sabemos que la salud es uno de los bienes incaculables y necesitamos conservar día a día, por eso
                    tenemos más de 120 productos denutrición y 60 productos de belleza para mejorar tu salud de manera 
                    natural.
                    <br/> 

                </p>

                <NutritionCardsEsp/>
            </main>
            <Footer/>
        </>
    )
}

export default NutritionEsp;