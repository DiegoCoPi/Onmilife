import "./footer.css"
import Correo from "@/assets/desing/correo.png"
import Instagram from "@/assets/desing/instagram.png"
import WhatsApp from "@/assets/desing/whatsapp.png"
import {Link} from "react-router-dom"
function Footer(){
    return(
        <footer className="footer-main">    
            <div>
                <div className="images">
                    <Link>
                        <div className="image-config">
                            <img src={Correo} alt="correo"/>
                            <p>correoelectrónico@gmail.com</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="image-config">
                            <img src={Instagram} alt="Instagram"></img>
                            <p>Perfil instagram</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="image-config">
                            <img src={WhatsApp} alt=""></img>
                            <p>+57 3505971435</p>
                        </div>
                    </Link>
                </div>
                <p>Todos los derechos reservado © copyright Diego Alexander Corrales Piñeros</p>
            </div>
        </footer>
    )
}
export default Footer