import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'rgba(0,0,0,0.5)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>
          Game<span style={{ color: 'var(--nano-banana)' }}>Snack</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
          Level up your gaming experience.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <Link to="/about" style={{ color: 'var(--text-muted)' }}>About</Link>
          <Link to="/contact" style={{ color: 'var(--text-muted)' }}>Contact</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Game Snack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
