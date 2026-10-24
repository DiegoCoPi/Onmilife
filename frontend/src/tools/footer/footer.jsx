import "./footer.css"
import Correo from "@/assets/desing/correo.png"
import Instagram from "@/assets/desing/instagram.png"
import WhatsApp from "@/assets/desing/whatsapp.png"

function Footer() {
  return (
    <footer className="footer-main">
      <ul className="images">
        <li>
          <a className="image-config" href="mailto:tucorreo@gmail.com">
            <img src={Correo} alt="Correo electrónico" />
            <span>tucorreo@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            className="image-config"
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
            <span>@tuusuario</span>
          </a>
        </li>
        <li>
          <a
            className="image-config"
            href="https://wa.me/573505971435"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsApp} alt="WhatsApp" />
            <span>+57 350 597 1435</span>
          </a>
        </li>
      </ul>
      <p className="text">
        © {new Date().getFullYear()} Diego Alexander Corrales Piñeros. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer