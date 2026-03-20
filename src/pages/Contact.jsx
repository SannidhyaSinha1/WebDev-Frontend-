import { Users } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-container glass-panel animate-fade-in-up" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '4rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <Users size={48} color="var(--accent-gold)" style={{ marginBottom: '1.5rem', marginInline: 'auto' }} />
                <h1 className="page-title text-gold" style={{ marginBottom: '1rem' }}>Contact Our Team</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Have questions or feedback? We'd love to hear from you. Reach out to our leadership team directly.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                {/* Contact 1 */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease, background 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Narala Venkata Koushik Reddy</h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & CEO</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>📞</span> +91 9182129413
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>✉️</span> naralakoushik.reddy2022a@vitstudent.ac.in
                        </p>
                    </div>
                </div>

                {/* Contact 2 */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease, background 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Sannidhya Sinha</h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Chief Operations Officer</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>📞</span> +91 9905532379
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>✉️</span> sannidhya.sinha2024@vitstudent.ac.in
                        </p>
                    </div>
                </div>

                {/* Contact 3 */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease, background 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Pranav Goswami</h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Lead Customer Relations</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>📞</span> +91 9810814989
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                            <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>✉️</span> pranav.goswami2024@vitstudent.ac.in
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
