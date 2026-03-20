import { useState } from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(item);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="item-card glass-panel animate-fade-in-up">
            <div className="item-img-container">
                <img src={item.image} alt={item.name} className="item-img" />
                {item.bestSeller && <span className="badge-bestseller">Best Seller</span>}
            </div>

            <div className="item-content">
                <div className="item-header">
                    <h3 className="item-title">{item.name}</h3>
                    <span className="item-price">₹{item.price.toFixed(0)}</span>
                </div>

                <p className="item-desc">{item.description}</p>

                <div className="item-footer">
                    <div className="item-rating">
                        <Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                        <span>{item.rating}</span>
                    </div>

                    <button
                        className={`btn btn-primary btn-add-cart ${added ? 'added' : ''}`}
                        onClick={handleAddToCart}
                    >
                        {added ? (
                            <>
                                <Check size={18} /> Added
                            </>
                        ) : (
                            <>
                                <ShoppingCart size={18} /> Add
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
