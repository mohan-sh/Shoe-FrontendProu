import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with our team
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-description">
                We'd love to hear from you! Whether you have questions about our products, 
                need help with an order, or just want to say hello, we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>123 Shoe Street<br />Fashion District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@shoeshop.com<br />support@shoeshop.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h3>Store Hours</h3>
                    <p>Mon-Fri: 9AM-8PM<br />Sat-Sun: 10AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form">
                <h2>Send us a Message</h2>
                <form className="form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows="5"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <h3>Interactive Map</h3>
                <p>123 Shoe Street, Fashion District, New York, NY 10001</p>
                <button className="btn btn-secondary">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
