import { Shield } from 'lucide-react';

const Policies = () => {
    return (
        <div className="page-container glass-panel animate-fade-in-up" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '4rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <Shield size={48} color="var(--accent-gold)" style={{ marginBottom: '1.5rem', marginInline: 'auto' }} />
                <h1 className="page-title text-gold" style={{ marginBottom: '1rem' }}>Our Policies & Terms</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Please read our policies carefully before placing an order.
                </p>
            </div>

            <div className="policy-section" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Privacy Policy</h2>
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                        At Aura Tea, we value and respect your privacy. We collect basic information such as your name, email address, phone number, and delivery address solely for the purpose of fulfilling your orders, improving our services, and communicating with you about your purchases.
                    </p>
                    <p>
                        We implement reasonable security measures to protect your personal information. We strictly do not sell, rent, or share your personal data with third-party marketing agencies. Payment information is processed securely through encrypted third-party gateways and is not stored on our servers.
                    </p>
                </div>
            </div>

            <div className="policy-section" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Terms and Conditions</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li>
                        <strong style={{ color: 'var(--text-primary)' }}>Acceptance of Terms:</strong> By accessing and using our website to browse or place orders, you agree to be bound by these Terms and Conditions.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-primary)' }}>Product Availability & Pricing:</strong> All items are subject to availability. We reserve the right to modify prices, discontinue products, or run promotions without prior notice.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-primary)' }}>Order Fulfillment:</strong> Once an order is placed, it enters our queue immediately. Cancellations are only permitted within 5 minutes of placing the order, considering the perishable nature of our beverages.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-primary)' }}>User Conduct:</strong> You agree not to use our website for any unlawful purposes, including but not limited to fraudulent transactions or distributing malicious software.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-primary)' }}>Intellectual Property:</strong> All content on this website, including logos, images, text, and graphics, is the property of Aura Tea and is protected by copyright laws. Unauthorized use or reproduction is strictly prohibited.
                    </li>
                </ul>
            </div>

            <div className="policy-section" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Refund & Return Policy</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    Due to health and safety standards, and the perishable nature of our beverages and food items, we generally do not accept returns. However, your satisfaction is our priority. If your order arrives damaged, incorrect, or does not meet our quality standards, please reach out to our Customer Relations team within 24 hours of delivery, and we will gladly arrange a replacement or a full refund to your original payment method.
                </p>
            </div>

            <div className="policy-section" style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Allergen Information</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    Please be aware that our drinks and food items may contain or come into contact with common allergens such as dairy (milk), tree nuts, soy, and wheat. While we take precautions to prevent cross-contamination, we cannot guarantee a completely allergen-free environment. Please inform our staff of any severe allergies before placing an order.
                </p>
            </div>
        </div>
    );
};

export default Policies;
