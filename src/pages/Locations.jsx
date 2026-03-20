import { MapPin } from 'lucide-react';

const Locations = () => {
    return (
        <div className="page-container glass-panel animate-fade-in-up" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '4rem auto', textAlign: 'center' }}>
            <MapPin size={48} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
            <h1 className="page-title text-gold" style={{ marginBottom: '1rem' }}>Our Location</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                Come visit us and experience our crafted teas and coffees in person.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vellore</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                    123 Tea Station Ave.<br />
                    Vellore, Tamil Nadu<br />
                    India
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--accent-gold)' }}>Open Daily: 8 AM - 10 PM</p>
            </div>
        </div>
    );
};

export default Locations;
