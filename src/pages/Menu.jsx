import { useState } from 'react';
import { menuItems } from '../data/items';
import ItemCard from '../components/ItemCard';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Coffee', 'Tea', 'Specialty'];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="menu-page">
            <div className="menu-header">
                <h1 className="page-title">Our Menu</h1>
                <p className="page-subtitle">Discover our handcrafted beverages made with love.</p>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="menu-container">
                <div className="items-grid">
                    {filteredItems.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
