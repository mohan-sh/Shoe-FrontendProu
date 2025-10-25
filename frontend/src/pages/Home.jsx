import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Shoe Shop</span>
          </h1>
          <p className="hero-subtitle">
            Discover the perfect pair of shoes for every occasion. 
            From casual sneakers to elegant dress shoes, we have it all.
          </p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-primary">
              Shop Now
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="shoe-showcase">
            <div className="shoe shoe-1">👟</div>
            <div className="shoe shoe-2">👠</div>
            <div className="shoe shoe-3">👞</div>
            <div className="shoe shoe-4">🥾</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Shoe Shop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50. Fast and reliable delivery to your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe with our secure payment processing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>Not satisfied? Return your shoes within 30 days for a full refund.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guarantee</h3>
              <p>We only sell high-quality shoes from trusted brands and manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Shoes?</h2>
            <p>Browse our extensive collection and find the shoes that match your style.</p>
            <a href="/products" className="btn btn-primary btn-large">
              Start Shopping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
