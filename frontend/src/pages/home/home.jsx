import CardFlags from "@/tools/cards/cards-flags";
import './home.css'

function Home(){
    return(
        <>
            <header className="title-home">
                <h1>¡Elige el idioma de tu preferencia / Choose the your favorite language</h1>
            </header>
            <main>
                <CardFlags/>    
            </main>
            
        </>
    )
}

export default Home