import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartCheckout from './pages/CartCheckout';
import Login from './pages/Login';
import BestSellers from './pages/BestSellers';
import Locations from './pages/Locations';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartCheckout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
