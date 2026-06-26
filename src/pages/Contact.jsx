const Contact = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '40px 0' }}>
      <h1 className="section-title">Contact <span>Us</span></h1>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--nano-banana)' }}>Get in Touch</h3>
          <p>Phone: <strong>7047743585</strong></p>
          <p>Email: <strong>alizawaseem887@gmail.com</strong></p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
