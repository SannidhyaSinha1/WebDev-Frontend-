import './Footer.css';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Coffee size={32} className="logo-icon" />
                        <span>Aura Tea</span>
                    </Link>
                    <p className="footer-desc">
                        Crafting the perfect blend of tradition and modern aesthetics. Experience the finest teas and coffees from around the world.
                    </p>
                    <div className="social-links">
                        <a href="#" className="btn-icon" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" className="btn-icon" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" className="btn-icon" aria-label="Facebook"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/best-sellers">Best Sellers</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4>Policies & Contact</h4>
                    <ul>
                        <li><Link to="/policies">View Policies</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aura Tea. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
