import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Gamepad2 size={32} color="var(--nano-banana)" />
          <span>Game<span className="accent">Snack</span></span>
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-links active' : 'nav-links'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-links active' : 'nav-links'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-links active' : 'nav-links'}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/membership" className={location.pathname === '/membership' ? 'nav-links active' : 'nav-links'}>Membership</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="btn-primary nav-btn">Book Online</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
