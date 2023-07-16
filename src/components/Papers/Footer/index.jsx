import { FaLinkedin , FaGithub } from 'react-icons/fa';
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
              href="https://www.linkedin.com/in/eduardo-carneiiiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color='#0A66C2'/>
            </a>
        
            <a
              href="https://github.com/educcarnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#333" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
