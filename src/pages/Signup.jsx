import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Coffee, UserPlus } from 'lucide-react';
import './Login.css'; // Reusing the login styling

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                return;
            }

            // Mock signup by auto logging them in
            login(email, password);

            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container glass-panel animate-fade-in-up">
                <div className="login-header">
                    <Coffee size={40} className="login-icon text-gold" />
                    <h2>Create an Account</h2>
                    <p>Join Aura Tea for a premium experience</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 login-btn" style={{ marginTop: '1rem' }}>
                        <UserPlus size={20} /> Sign Up
                    </button>
                </form>

                <div className="login-footer">
                    <p>Already have an account? <Link to="/login" className="signup-link">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
