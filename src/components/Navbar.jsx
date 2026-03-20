import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const { user, logout } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMenu = () => setMobileMenuOpen(false);

    const cartCount = getCartCount();

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <Coffee size={28} className="logo-icon" />
                    <span>Aura Tea</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                    <Link to="/menu" className={`nav-item ${location.pathname === '/menu' ? 'active' : ''}`} onClick={closeMenu}>Menu</Link>

                    {user ? (
                        <div className="nav-auth-mobile">
                            <span className="user-greeting">Hi, {user.name}</span>
                            <button onClick={() => { logout(); closeMenu(); }} className="btn-icon">
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className={`nav-item mobile-only ${location.pathname === '/login' ? 'active' : ''}`} onClick={closeMenu}>
                            Login
                        </Link>
                    )}
                </div>

                <div className="nav-actions">
                    {user ? (
                        <div className="user-profile desktop-only">
                            <span>{user.name}</span>
                            <button onClick={logout} className="btn-icon">
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-icon desktop-only" title="Login">
                            <LogIn size={20} />
                        </Link>
                    )}

                    <Link to="/cart" className="cart-btn btn-icon">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <button className="mobile-menu-btn btn-icon" onClick={toggleMenu}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
