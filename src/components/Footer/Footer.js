import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Computer Supplies</h3>
                    <p>Tu tienda de confianza para insumos informáticos de calidad.</p>
                    <div className="footer-contact">
                        <p>📍 Buenos Aires, Argentina</p>
                        <p>📞 +54 11 1234-5678</p>
                        <p>✉️ info@computersupplies.com</p>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Categorías</h4>
                    <ul>
                        <li><Link to="/category/Procesadores">Procesadores</Link></li>
                        <li><Link to="/category/SSD">Discos SSD</Link></li>
                        <li><Link to="/category/MemRam">Memorias RAM</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><Link to="/">Preguntas Frecuentes</Link></li>
                        <li><Link to="/">Envíos</Link></li>
                        <li><Link to="/">Devoluciones</Link></li>
                        <li><Link to="/">Contacto</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2026 Computer Supplies & Solutions. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
