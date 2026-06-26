const Home = () => {
  return (
    <div className="animate-fade-in">
      <section style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1 className="section-title">Welcome to Game<span>Snack</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px' }}>
          The ultimate gaming zone where you can play PS5, Pool, Table Tennis, FIFA, GTA 5 and more while enjoying our delicious snacks!
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn-primary">Explore Games</button>
          <button className="btn-outline">View Menu</button>
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <h2 className="section-title">Gaming <span>Rates</span></h2>
        <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--nano-banana)' }}>120 Rs</h3>
          <p style={{ color: 'var(--text-muted)' }}>per 30 minutes</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
