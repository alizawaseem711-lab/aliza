const Membership = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '40px 0' }}>
      <h1 className="section-title">Premium <span>Membership</span></h1>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--nano-banana)', marginBottom: '10px' }}>VIP Game Snack Card</h3>
        <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
          Join our premium membership for exclusive perks, priority booking, and discounted snack combos!
        </p>
        
        <ul style={{ textAlign: 'left', marginBottom: '30px', color: 'var(--text-main)', lineHeight: '2' }}>
          <li>✨ Priority access to new games (PS5, etc)</li>
          <li>✨ 15% off all snacks and beverages</li>
          <li>✨ Free setup for Birthday Parties</li>
          <li>✨ Exclusive VIP lounge access</li>
        </ul>

        <button className="btn-primary">Apply for Membership</button>
      </div>
    </div>
  );
};

export default Membership;
