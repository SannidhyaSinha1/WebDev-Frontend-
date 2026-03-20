import { Star } from 'lucide-react';
import { menuItems } from '../data/items';
import ItemCard from '../components/ItemCard';

const BestSellers = () => {
    // Extract only the top-rated/best seller items from our list
    const bestSellers = menuItems.filter(item => item.bestSeller);

    return (
        <div className="menu-page">
            <div className="menu-header">
                <Star size={48} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
                <h1 className="page-title">Top Rated & Best Sellers</h1>
                <p className="page-subtitle">Our most popular and highly rated beverages.</p>
            </div>

            <div className="menu-container">
                <div className="items-grid">
                    {bestSellers.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
