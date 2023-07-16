import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./style.css"

export default function Footer() {
  return (
    <div>
      <div>
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Cost Captor - Eduardo Carneiro. Todos os direitos
            reservados.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
