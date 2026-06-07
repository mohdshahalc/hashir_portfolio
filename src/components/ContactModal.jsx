import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose, type, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (!accessKey) {
        // Fallback for demo/development when key is not set
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Mock Web3Forms submission (VITE_WEB3FORMS_ACCESS_KEY is missing):", formData);
        setFormData({ name: '', email: '', message: '' });
        onSuccess("Message received! (Preview Mode: setup VITE_WEB3FORMS_ACCESS_KEY to receive emails)");
        onClose();
      } else {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Portfolio Message (${type})`,
            from_name: "Hashir's Portfolio"
          })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Something went wrong sending the message.');
        }

        // Reset form and notify success
        setFormData({ name: '', email: '', message: '' });
        onSuccess("Thank you! Your message has been sent successfully.");
        onClose();
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Could not send email. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const isConnectModal = type === 'Connect';

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {isConnectModal ? (
          <>
            <h2 className="modal-title">Connect</h2>
            <p className="modal-desc" style={{ marginBottom: '25px' }}>
              Choose a platform to connect with me directly.
            </p>
            <div className="connect-social-grid">
              <a 
                href="https://www.instagram.com/c_.hashir?igsh=OWk1bXBvZmpvZHhh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-social-card instagram"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" className="social-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div className="social-card-info">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">@c_.hashir</span>
                </div>
              </a>

              <a 
                href="https://wa.me/917356978584" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-social-card whatsapp"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" className="social-svg" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 2.727 1.48 4.721 1.485 5.502.003 9.971-4.469 9.974-9.978.002-2.67-1.038-5.18-2.93-7.078-1.89-1.898-4.4-2.943-7.073-2.943-5.51 0-9.98 4.47-9.983 9.983-.001 2.03.543 3.197 1.436 4.767l-.986 3.6 3.69-.97-.08.056z"/>
                  </svg>
                </div>
                <div className="social-card-info">
                  <span className="social-platform">WhatsApp</span>
                  <span className="social-handle">+91 73569 78584</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-social-card linkedin"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" className="social-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div className="social-card-info">
                  <span className="social-platform">LinkedIn</span>
                  <span className="social-handle">Connect on LinkedIn</span>
                </div>
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="modal-title">{type}</h2>
            <p className="modal-desc">
              Leave a message below and I will get back to you as soon as possible.
            </p>

            <div className="modal-direct-contact">
              <a href="mailto:ihashirc@gmail.com" className="modal-contact-link">
                <svg viewBox="0 0 24 24" className="contact-mini-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                ihashirc@gmail.com
              </a>
              <a href="tel:+917356978584" className="modal-contact-link">
                <svg viewBox="0 0 24 24" className="contact-mini-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 73569 78584
              </a>
              <a href="https://wa.me/917356978584" target="_blank" rel="noopener noreferrer" className="modal-contact-link whatsapp">
                <svg viewBox="0 0 24 24" className="contact-mini-svg" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 2.727 1.48 4.721 1.485 5.502.003 9.971-4.469 9.974-9.978.002-2.67-1.038-5.18-2.93-7.078-1.89-1.898-4.4-2.943-7.073-2.943-5.51 0-9.98 4.47-9.983 9.983-.001 2.03.543 3.197 1.436 4.767l-.986 3.6 3.69-.97-.08.056z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {error && (
              <div style={{ 
                color: '#ef4444', 
                background: 'rgba(239, 68, 68, 0.1)', 
                padding: '12px', 
                borderRadius: '8px', 
                fontSize: '14px', 
                marginBottom: '15px',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to build or discuss?"
                />
              </div>

              <button type="submit" disabled={submitting} className="submit-btn">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
