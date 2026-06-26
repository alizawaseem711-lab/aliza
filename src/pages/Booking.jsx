const Booking = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '40px 0' }}>
      <h1 className="section-title">Book <span>Online</span></h1>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Save time by reserving your spot! Select your preferred game or area, pick a time, and we'll have it ready for you.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          
          <select defaultValue="">
            <option value="" disabled>Select Activity</option>
            <option value="ps5">PS5</option>
            <option value="pool">Pool</option>
            <option value="table_tennis">Table Tennis</option>
            <option value="board_games">Board Games</option>
            <option value="birthday">Birthday Party Corner</option>
          </select>

          <input type="date" />
          <input type="time" />
          
          <button type="button" className="btn-primary" style={{ marginTop: '10px' }}>Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
