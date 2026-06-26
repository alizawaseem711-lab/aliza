import homeImage from '../assets/home_image.jpg';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '80px 20px',
        gap: '50px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left Side: Image */}
        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <img 
            src={homeImage} 
            alt="Game Snack" 
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 232, 31, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              objectFit: 'cover'
            }} 
          />
        </div>

        {/* Right Side: Text Content */}
        <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '20px', fontSize: '3rem' }}>
            Welcome to Game<span>Snack</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.8' }}>
            The ultimate gaming zone where you can play PS5, Pool, Table Tennis, FIFA, GTA 5 and more while enjoying our delicious snacks! Whether it's a birthday party or a weekend chill, we've got you covered.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className="btn-primary">Explore Games</button>
            <button className="btn-outline">View Menu</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <h2 className="section-title">Gaming <span>Rates</span></h2>
        <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--nano-banana)', marginBottom: '10px' }}>120 Rs</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>per 30 minutes</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
