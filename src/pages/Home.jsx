import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { menuItems } from '../data/items';
import ItemCard from '../components/ItemCard';
import './Home.css';

const Home = () => {
    const bestSellers = menuItems.filter(item => item.bestSeller).slice(0, 4);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg" style={{ backgroundImage: 'url(/assets/hero_background_1771755647446.png)' }}></div>
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Find Your <span className="text-gold">Perfect</span> Brew
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up delay-100">
                        Experience the finest assortment of premium teas and artisan coffees. Handcrafted perfection in every cup.
                    </p>
                    <div className="hero-actions animate-fade-in-up delay-200">
                        <Link to="/menu" className="btn btn-primary btn-large">
                            Explore Menu <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="bestsellers-section">
                <div className="section-header">
                    <h2>Our Best Sellers</h2>
                    <Link to="/menu" className="view-all-link">
                        View full menu <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="items-grid">
                    {bestSellers.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section glass-panel">
                <div className="feature">
                    <h3>Premium Quality</h3>
                    <p>Sourced from the finest organic farms globally.</p>
                </div>
                <div className="feature">
                    <h3>Artisan Crafters</h3>
                    <p>Prepared by expert baristas with passion.</p>
                </div>
                <div className="feature">
                    <h3>Aesthetic Vibe</h3>
                    <p>A completely immersive and beautiful experience.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
