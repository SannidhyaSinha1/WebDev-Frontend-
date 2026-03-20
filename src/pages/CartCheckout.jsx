import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import './CartCheckout.css';

const CartCheckout = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [checkingOut, setCheckingOut] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const total = getCartTotal();
    const tax = total * 0.08;
    const finalTotal = total + tax;

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login');
            return;
        }
        setCheckingOut(true);
        // Simulate API call
        setTimeout(() => {
            setCheckingOut(false);
            setOrderComplete(true);
            clearCart();
        }, 2000);
    };

    if (orderComplete) {
        return (
            <div className="checkout-success glass-panel animate-fade-in-up">
                <ShoppingBag size={64} className="success-icon" />
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase. Your premium beverages are being crafted.</p>
                <Link to="/menu" className="btn btn-primary mt-4">Return to Menu</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart flex-col-center">
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any drinks yet.</p>
                <Link to="/menu" className="btn btn-primary mt-4">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="cart-checkout-page">
            <h1 className="page-title text-center">Checkout</h1>

            <div className="checkout-container">
                <div className="cart-section glass-panel">
                    <h3>Your Order</h3>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="item-price">₹{item.price.toFixed(0)}</p>
                                </div>

                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="btn-icon qty-btn">
                                        <Minus size={16} />
                                    </button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="btn-icon qty-btn">
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="item-total">
                                    ₹{(item.price * item.quantity).toFixed(0)}
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="btn-icon remove-btn" aria-label="Remove item">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{total.toFixed(0)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (8%)</span>
                            <span>₹{tax.toFixed(0)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span className="text-gold">₹{finalTotal.toFixed(0)}</span>
                        </div>
                    </div>
                </div>

                <div className="billing-section glass-panel">
                    <h3>Billing Details</h3>
                    {!user ? (
                        <div className="login-prompt" style={{ padding: '2rem 0', textAlign: 'center' }}>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                You must be logged in to securely complete your purchase.
                            </p>
                            <Link to="/login" state={{ from: { pathname: '/cart' } }} className="btn btn-primary w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                Login to Checkout
                            </Link>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Don't have an account? <Link to="/signup" state={{ from: { pathname: '/cart' } }} className="text-gold">Sign up here</Link>
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleCheckout} className="billing-form">
                            <div className="form-row">
                                <div className="form-group flex-1">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-input" required defaultValue={user ? user.name : ''} />
                                </div>
                                <div className="form-group flex-1">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-input" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" required defaultValue={user ? user.email : ''} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Delivery Address</label>
                                <input type="text" className="form-input" required placeholder="123 Tea Lane" />
                            </div>

                            <h4 className="payment-heading mt-4"><CreditCard size={20} /> Payment Method</h4>

                            <div className="form-group">
                                <label className="form-label">Card Number</label>
                                <input type="text" className="form-input" required placeholder="0000 0000 0000 0000" />
                            </div>

                            <div className="form-row">
                                <div className="form-group flex-1">
                                    <label className="form-label">Expiry Date</label>
                                    <input type="text" className="form-input" required placeholder="MM/YY" />
                                </div>
                                <div className="form-group flex-1">
                                    <label className="form-label">CVC</label>
                                    <input type="text" className="form-input" required placeholder="123" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 mt-4 checkout-submit-btn"
                                disabled={checkingOut}
                            >
                                {checkingOut ? 'Processing...' : `Pay ₹${finalTotal.toFixed(0)}`}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartCheckout;
