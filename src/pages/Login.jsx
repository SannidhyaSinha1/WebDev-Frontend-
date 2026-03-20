import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Coffee, LogIn } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                return;
            }
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
                    <h2>Welcome Back</h2>
                    <p>Login to your Aura Tea account</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
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

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 login-btn">
                        <LogIn size={20} /> Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
